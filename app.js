const state = {
  sites: [],
  query: "",
  sortBy: "rank",
};

const elements = {
  providerCount: document.querySelector("#provider-count"),
  averageUptime: document.querySelector("#average-uptime"),
  averageLatency: document.querySelector("#average-latency"),
  updatedAt: document.querySelector("#updated-at"),
  searchInput: document.querySelector("#search-input"),
  sortSelect: document.querySelector("#sort-select"),
  rankingBody: document.querySelector("#ranking-body"),
  loadingState: document.querySelector("#loading-state"),
  errorState: document.querySelector("#error-state"),
  errorMessage: document.querySelector("#error-message"),
  emptyState: document.querySelector("#empty-state"),
  tableContainer: document.querySelector("#table-container"),
  retryButton: document.querySelector("#retry-button"),
  dataNote: document.querySelector("#data-note"),
};

const numberFormatter = new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 1 });

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeBoolean(value) {
  if (value === true || value === "yes" || value === 1) return true;
  if (value === false || value === "no" || value === 0) return false;
  return null;
}

function normalizeSite(site, index) {
  const models = Array.isArray(site.models) ? site.models.filter(Boolean).map(String) : [];
  const modelCount = Number(site.modelCount ?? site.modelCoverage ?? models.length);

  return {
    rank: Number(site.rank) || index + 1,
    name: String(site.name || site.siteName || "未命名站点"),
    url: String(site.url || site.siteUrl || "#"),
    models,
    modelCount: Number.isFinite(modelCount) ? modelCount : models.length,
    uptime: Number(site.uptime ?? site.averageUptime),
    latencyMs: Number(site.latencyMs ?? site.averageLatency),
    userRating: Number(site.userRating ?? site.rating),
    ratingCount: Number(site.ratingCount ?? site.reviewCount),
    paymentMethods: Array.isArray(site.paymentMethods)
      ? site.paymentMethods.filter(Boolean).map(String)
      : [],
    supportsRefund: normalizeBoolean(site.supportsRefund ?? site.refundSupported),
    supportsInvoice: normalizeBoolean(site.supportsInvoice ?? site.invoiceSupported),
  };
}

function formatPercent(value) {
  return Number.isFinite(value) ? `${numberFormatter.format(value)}%` : "--";
}

function formatLatency(value) {
  return Number.isFinite(value) ? `${Math.round(value)} ms` : "--";
}

function qualityClass(type, value) {
  if (!Number.isFinite(value)) return "medium";
  if (type === "uptime") {
    if (value >= 99.5) return "good";
    if (value >= 98) return "medium";
    return "poor";
  }
  if (value <= 700) return "good";
  if (value <= 1500) return "medium";
  return "poor";
}

function safeUrl(value) {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

function getDomain(value) {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return value === "#" ? "链接未配置" : value;
  }
}

function supportBadge(value, label) {
  if (value === true) {
    return `<span class="support-badge support-badge--yes" title="支持${label}" aria-label="支持${label}">✓</span>`;
  }
  if (value === false) {
    return `<span class="support-badge support-badge--no" title="不支持${label}" aria-label="不支持${label}">—</span>`;
  }
  return `<span class="support-badge support-badge--unknown" title="${label}信息待确认" aria-label="${label}信息待确认">?</span>`;
}

function renderSite(site) {
  const rankClass = site.rank <= 3 ? ` rank-badge--${site.rank}` : "";
  const uptimeClass = qualityClass("uptime", site.uptime);
  const latencyClass = qualityClass("latency", site.latencyMs);
  const modelTags = site.models
    .slice(0, 3)
    .map((model) => `<span class="model-tag">${escapeHtml(model)}</span>`)
    .join("");
  const payments = site.paymentMethods.length
    ? site.paymentMethods
        .map((method) => `<span class="payment-tag">${escapeHtml(method)}</span>`)
        .join("")
    : '<span class="payment-tag">未注明</span>';
  const url = safeUrl(site.url);
  const initial = Array.from(site.name.trim())[0] || "A";

  return `
    <tr>
      <td class="rank-cell" data-label="排名">
        <span class="rank-badge${rankClass}">${site.rank}</span>
      </td>
      <td class="site-cell" data-label="站点">
        <a class="site-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
          <span class="site-avatar">${escapeHtml(initial)}</span>
          <span class="site-info">
            <span class="site-name">
              ${escapeHtml(site.name)}
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3h7v7M13 3 6 10M11 9v4H3V5h4" /></svg>
            </span>
          </span>
        </a>
      </td>
      <td class="models-cell" data-label="模型覆盖">
        <div class="model-summary"><span class="model-count">${site.modelCount}</span><span>个模型</span></div>
        <div class="model-tags">${modelTags || '<span class="model-tag">暂无明细</span>'}</div>
      </td>
      <td class="uptime-cell" data-label="平均在线率">
        <div class="metric">
          <strong class="${uptimeClass}">${formatPercent(site.uptime)}</strong>
          <span class="metric-bar" aria-hidden="true"><span style="width:${Math.max(0, Math.min(100, site.uptime || 0))}%"></span></span>
        </div>
      </td>
      <td class="latency-cell" data-label="平均延迟">
        <span class="latency ${latencyClass}">${formatLatency(site.latencyMs)}</span>
      </td>
      <td class="rating-cell" data-label="用户评分">
        <span class="rating"><strong>${Number.isFinite(site.userRating) ? site.userRating.toFixed(1) : "--"}</strong><span>/ 5</span></span>
        ${Number.isFinite(site.ratingCount) ? `<small>${numberFormatter.format(site.ratingCount)} 人评分</small>` : ""}
      </td>
      <td class="payment-cell" data-label="支付方式"><div class="payments">${payments}</div></td>
      <td class="support-cell refund-cell" data-label="支持退款">${supportBadge(site.supportsRefund, "退款")}</td>
      <td class="support-cell invoice-cell" data-label="支持发票">${supportBadge(site.supportsInvoice, "发票")}</td>
    </tr>
  `;
}

function filteredSites() {
  const query = state.query.trim().toLocaleLowerCase("zh-CN");
  const result = state.sites.filter((site) => {
    if (!query) return true;
    return [site.name, getDomain(site.url), ...site.models, ...site.paymentMethods]
      .join(" ")
      .toLocaleLowerCase("zh-CN")
      .includes(query);
  });

  return result.sort((a, b) => {
    if (state.sortBy === "uptime") return (b.uptime || 0) - (a.uptime || 0);
    if (state.sortBy === "latency") return (a.latencyMs || Infinity) - (b.latencyMs || Infinity);
    if (state.sortBy === "models") return b.modelCount - a.modelCount;
    if (state.sortBy === "rating") return (b.userRating || 0) - (a.userRating || 0);
    return a.rank - b.rank;
  });
}

function renderTable() {
  const visibleSites = filteredSites();
  elements.rankingBody.innerHTML = visibleSites.map(renderSite).join("");
  elements.emptyState.hidden = visibleSites.length > 0;
  elements.tableContainer.hidden = visibleSites.length === 0;
}

function renderSummary(sites) {
  const validUptimes = sites.map((site) => site.uptime).filter(Number.isFinite);
  const validLatencies = sites.map((site) => site.latencyMs).filter(Number.isFinite);
  const average = (values) =>
    values.length ? values.reduce((total, value) => total + value, 0) / values.length : NaN;

  elements.providerCount.textContent = numberFormatter.format(sites.length);
  elements.averageUptime.textContent = formatPercent(average(validUptimes));
  elements.averageLatency.textContent = formatLatency(average(validLatencies));
}

function formatUpdatedAt(value) {
  if (!value) return "更新时间未知";
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return `更新于 ${value}`;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return `更新于 ${value}`;
  return `更新于 ${new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date)}`;
}

function setView(view) {
  elements.loadingState.hidden = view !== "loading";
  elements.errorState.hidden = view !== "error";
  elements.tableContainer.hidden = view !== "ready";
  elements.emptyState.hidden = true;
}

async function loadData() {
  setView("loading");

  try {
    const response = await fetch(`./data.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const rawSites = Array.isArray(data) ? data : data.sites;
    if (!Array.isArray(rawSites)) throw new Error("data.json 中缺少 sites 数组");

    state.sites = rawSites.map(normalizeSite);
    renderSummary(state.sites);
    elements.updatedAt.textContent = formatUpdatedAt(data.updatedDate || data.updatedAt || data.generatedAt);
    if (data.note) elements.dataNote.textContent = String(data.note);
    setView("ready");
    renderTable();
  } catch (error) {
    console.error(error);
    setView("error");
    elements.updatedAt.textContent = "数据暂不可用";
    elements.errorMessage.textContent = window.location.protocol === "file:"
      ? "请通过本地 HTTP 服务或 GitHub Pages 访问，浏览器不能直接从 file:// 读取 JSON。"
      : "请确认 data.json 存在且格式正确，然后刷新页面重试。";
  }
}

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderTable();
});

elements.sortSelect.addEventListener("change", (event) => {
  state.sortBy = event.target.value;
  renderTable();
});

elements.retryButton.addEventListener("click", loadData);

loadData();

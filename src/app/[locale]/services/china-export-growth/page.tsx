import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Globe2,
  Mail,
  MapPin,
  Megaphone,
  Scale,
  Ship,
  TrendingUp,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { alternates, canonical } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

const PAGE_PATH = "/services/china-export-growth";
const CONTACT_EMAIL = "inquriy@getfrp.com";
const CONTACT_NAME = "Doris Li";
const CONTACT_HREF =
  "mailto:inquriy@getfrp.com?subject=GetFRP%20%E5%A4%8D%E6%9D%90%E5%87%BA%E6%B5%B7%E6%9C%8D%E5%8A%A1%E5%92%A8%E8%AF%A2";
const title = "复材出海服务｜出口代理、法务咨询与海外推广｜GetFRP";
const description =
  "GetFRP 为中国复材材料商与制品企业提供海外市场进入、出口代理、法律法务咨询及 GetFRP.com 在线推广服务，由拥有30年纤维复材国际贸易经验的海外专家与洛杉矶办公室协同支持。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: alternates(PAGE_PATH),
  openGraph: {
    type: "website",
    siteName: "GetFRP",
    locale: "zh_CN",
    url: canonical(PAGE_PATH),
    title,
    description,
    images: [],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [],
  },
};

const SERVICES = [
  {
    Icon: Globe2,
    number: "01",
    title: "出海战略与市场进入",
    summary:
      "从产品能力、目标市场和竞争格局出发，确定先进入哪里、向谁销售，以及用什么价值主张获得第一批海外机会。",
    items: [
      "目标国家、应用行业与客户类型筛选",
      "产品定位、英文卖点与竞争对标",
      "渠道路径与阶段性市场进入计划",
    ],
  },
  {
    Icon: Ship,
    number: "02",
    title: "出口代理与交易执行",
    summary:
      "协助缺少海外交易团队的复材企业推进询盘、报价、合同与交付，让技术沟通和出口环节衔接得更顺畅。",
    items: [
      "海外客户沟通、报价与商务协调",
      "出口合同、单证、物流与交付协同",
      "回款节点、贸易条款与项目风险提示",
    ],
  },
  {
    Icon: Scale,
    number: "03",
    title: "法律法务与合规咨询",
    summary:
      "围绕复材出口中的合同、知识产权、产品责任和贸易合规识别风险，帮助企业在成交前把关键边界写清楚。",
    items: [
      "英文合同条款与交易风险审阅",
      "知识产权、保密与渠道协议支持",
      "产品合规、贸易救济与争议协同",
    ],
    note: "涉及具体司法辖区的正式法律意见时，可协同当地持牌律师；最终服务范围以书面方案为准。",
  },
  {
    Icon: Megaphone,
    number: "04",
    title: "GetFRP.com 在线推广",
    summary:
      "借助 GetFRP 面向海外复材采购与工程人群的内容和供应商平台，建立长期可检索、可验证的英文数字资产。",
    items: [
      "英文供应商档案与核心产品展示",
      "技术内容、应用案例与搜索曝光",
      "海外询盘入口、线索反馈与持续优化",
    ],
  },
] as const;

const PROCESS = [
  {
    step: "01",
    title: "现状诊断",
    text: "了解产品、产能、认证、既有客户、目标市场和当前出海难点。",
  },
  {
    step: "02",
    title: "方案与边界",
    text: "明确优先市场、服务组合、交付物、费用、双方责任与阶段目标。",
  },
  {
    step: "03",
    title: "落地执行",
    text: "推进英文材料、在线推广、客户沟通、交易文件及项目交付协同。",
  },
  {
    step: "04",
    title: "复盘迭代",
    text: "根据曝光、询盘和成交反馈，持续调整内容、定位与客户开发动作。",
  },
] as const;

export default async function ChinaExportGrowthPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const pageUrl = `${CURRENT_SITE_URL}${PAGE_PATH}`;

  return (
    <div lang="zh-CN" className="bg-white text-brand-graphite">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          url: pageUrl,
          name: "GetFRP 中国复材企业出海服务",
          description,
          inLanguage: "zh-CN",
          provider: { "@id": `${CURRENT_SITE_URL}/#organization` },
          areaServed: [
            { "@type": "Country", name: "China" },
            { "@type": "Country", name: "United States" },
          ],
          serviceType: [
            "复材出海咨询",
            "出口代理",
            "法律法务咨询",
            "GetFRP.com 在线推广",
          ],
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: pageUrl,
          },
        }}
      />

      <section className="relative overflow-hidden border-b border-white/10 bg-brand-navy text-white">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(123,228,225,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(123,228,225,0.18)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="pointer-events-none absolute -right-24 top-16 size-80 rounded-full border border-brand-aqua/20 bg-brand-blue/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-18 pt-6 sm:px-6 sm:pb-24 sm:pt-8">
          <PageBreadcrumbs
            homeLabel="首页"
            trail={[{ label: "中国企业出海服务", href: PAGE_PATH }]}
            className="mb-10 flex flex-wrap items-center gap-1 text-xs text-slate-300"
          />

          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-aqua/25 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-[0.12em] text-brand-aqua">
                <Factory size={13} /> 面向中国复材材料与制品企业
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                让中国复材产品，
                <span className="block text-brand-aqua">更稳地走向海外市场。</span>
              </h1>
              <p className="mt-7 max-w-3xl text-[16px] leading-8 text-slate-200 sm:text-lg">
                GetFRP 为复材原材料、半成品与制品企业提供从市场进入、出口代理、法务合规到海外在线推广的一体化支持，把技术实力转化为海外客户看得懂、信得过、愿意采购的商业表达。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={CONTACT_HREF}
                  className={buttonVariants({
                    size: "lg",
                    variant: "signal",
                    className: "min-h-12 px-5 text-sm font-semibold",
                  })}
                >
                  邮件联系 Doris Li <ArrowRight size={16} />
                </a>
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-5 text-sm font-semibold text-white transition-colors hover:border-brand-aqua/60 hover:bg-white/5"
                >
                  查看服务内容
                </a>
              </div>
            </div>

            <aside className="border-l border-white/20 pl-6 sm:pl-8">
              <div className="text-[11px] font-medium tracking-[0.16em] text-brand-aqua">
                跨太平洋服务能力
              </div>
              <div className="mt-6 space-y-6">
                <div>
                  <div className="text-3xl font-semibold">30 年</div>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    拥有30年纤维复材国际贸易经验的海外专家参与项目研判
                  </p>
                </div>
                <div className="border-t border-white/15 pt-6">
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <MapPin size={18} className="text-brand-aqua" /> 洛杉矶办公室
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    连接北美市场、客户沟通与当地专业资源
                  </p>
                </div>
                <div className="border-t border-white/15 pt-6">
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <BadgeCheck size={18} className="text-brand-aqua" /> 复材垂直平台
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    从材料、工艺和标准出发，不做泛行业营销
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-cool-gray bg-[#f4f6f9]">
        <div className="mx-auto grid max-w-7xl gap-px bg-brand-cool-gray px-4 sm:grid-cols-3 sm:px-6">
          {[
            ["懂复材", "理解材料体系、工艺、标准与应用场景"],
            ["懂出口", "覆盖从询盘到合同、单证与交付的关键节点"],
            ["懂海外客户", "以海外采购与工程团队的决策逻辑组织信息"],
          ].map(([heading, text]) => (
            <div key={heading} className="bg-[#f4f6f9] px-5 py-6 sm:px-7">
              <div className="text-sm font-semibold text-brand-navy">{heading}</div>
              <div className="mt-1 text-xs leading-5 text-brand-graphite/65">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.18em] text-brand-blue">
              服务范围
            </div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl">
              从“能生产”到“能在海外持续成交”
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-brand-graphite/70">
              出海不是简单翻译一套画册。我们会把产品证据、客户需求、交易路径和风险控制放在同一个项目框架中，根据企业阶段选择所需服务。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {SERVICES.map(({ Icon, number, title: serviceTitle, summary, items, ...service }) => (
              <article
                key={number}
                className="group rounded-2xl border border-brand-cool-gray bg-white p-6 transition-colors hover:border-brand-blue/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-brand-aqua/25 text-brand-blue">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-xs text-brand-graphite/35">{number}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-brand-navy">{serviceTitle}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-graphite/70">{summary}</p>
                <ul className="mt-5 space-y-2.5 border-t border-brand-cool-gray pt-5">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[13px] leading-6 text-brand-graphite/80">
                      <CheckCircle2 size={15} className="mt-1 shrink-0 text-brand-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {"note" in service ? (
                  <p className="mt-4 rounded-lg bg-[#f4f6f9] p-3 text-[11px] leading-5 text-brand-graphite/60">
                    {service.note}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-brand-cool-gray bg-[#f4f6f9]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-2xl bg-brand-navy p-8 text-white sm:p-10">
            <div className="pointer-events-none absolute -right-14 -top-14 size-44 rounded-full border-[28px] border-brand-teal/15" />
            <TrendingUp size={24} className="text-brand-aqua" />
            <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight">
              不只是“做推广”，而是建设可被海外客户验证的企业资产。
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
              海外采购不会仅凭一句“质量好、价格优”做决定。GetFRP 帮助企业把产品参数、制造能力、认证范围、应用证据与服务边界组织成可检索、可比较、可用于采购评估的信息。
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["英文供应商可信档案", "产品与应用内容资产", "标准与认证证据表达", "询盘与市场反馈闭环"].map((item) => (
                <div key={item} className="flex items-center gap-2 border-t border-white/15 pt-3 text-sm">
                  <CheckCircle2 size={15} className="text-brand-aqua" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold tracking-[0.18em] text-brand-blue">
              适合哪些企业
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy">
              有复材能力，正在寻找更清晰的海外路径
            </h2>
            <div className="mt-7 space-y-5">
              {[
                ["成熟材料商", "已有稳定产品与产能，希望开拓北美或其他海外客户。"],
                ["专业型制造商", "技术能力较强，但英文市场资料、客户开发和出口团队不足。"],
                ["转型中的内贸企业", "希望从代工或国内销售走向自主海外品牌与直接客户。"],
                ["已有出口但增长停滞", "需要重新梳理定位、渠道、线上内容或交易风险控制。"],
              ].map(([heading, text], index) => (
                <div key={heading} className="grid grid-cols-[36px_1fr] gap-3">
                  <div className="font-mono text-xs font-semibold text-brand-teal">0{index + 1}</div>
                  <div>
                    <h3 className="font-semibold text-brand-navy">{heading}</h3>
                    <p className="mt-1 text-sm leading-6 text-brand-graphite/65">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold tracking-[0.18em] text-brand-blue">
            合作流程
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-brand-navy sm:text-4xl">
            先诊断，再确定适合您的服务组合
          </h2>
          <p className="mt-4 text-sm leading-7 text-brand-graphite/65">
            不要求企业一次购买全部服务。我们会先了解现状，再以书面范围明确阶段任务、交付物和费用。
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {PROCESS.map(({ step, title: processTitle, text }) => (
            <article key={step} className="border-t-2 border-brand-navy pt-5">
              <div className="font-mono text-xs font-semibold text-brand-teal">STEP {step}</div>
              <h3 className="mt-3 text-lg font-semibold text-brand-navy">{processTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-graphite/65">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-cool-gray bg-brand-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-brand-aqua">
              <ClipboardCheck size={15} /> 从一次具体沟通开始
            </div>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
              告诉我们您的产品、目标市场和当前难点。
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              建议在邮件中附上公司简介、核心产品、主要认证、已有出口市场及希望解决的问题，便于我们更快判断合作切入点。
            </p>
          </div>
          <div className="min-w-[280px] rounded-xl border border-white/20 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Mail size={16} className="text-brand-aqua" /> 服务咨询
            </div>
            <div className="mt-4 text-lg font-semibold">联系人：{CONTACT_NAME}</div>
            <a
              href={CONTACT_HREF}
              className="mt-1 block break-all text-sm text-brand-aqua underline decoration-brand-aqua/40 underline-offset-4 hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={CONTACT_HREF}
              className={`${buttonVariants({ variant: "signal", size: "lg" })} mt-6 min-h-11 w-full font-semibold`}
            >
              发送服务咨询邮件 <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

---
title: "中国国际复材展供应商主页研究"
version: "1.0.0"
last_updated: "2026-08-25"
sensitivity: "公开"
changelog:
  - version: "1.0.0"
    date: "2026-08-25"
    changes: "建立 CCE 展商去重、官网核验、发布与跳过记录；首批新增 4 家可索引供应商。"
---

> [!info] 研究用途
> 本文维护“中国国际复材展名录 → GetFRP 已上线供应商 → 企业官网 → 可索引主页”的证据链。它是公开来源研究记录，不代表 GetFRP 已完成工厂、证书、产能或商业信用审计。

## 研究范围与准入规则

- 展会来源：[2026 中国国际复材展网上展厅](https://www.chinacompositesexpo.com/cn/netshow.php)。
- 本轮开始时 Git 策展目录为 99 家；去重同时比较中文主体、英文主体、规范化 slug 和官网域名。
- 只有能够确认企业自有官网、官网仍可访问、官网产品与展会主体一致、且有足够产品/工艺/联系方式证据的企业才发布。
- 只找到 B2B 店铺、黄页、社交账号、新闻稿或工商聚合页的企业不视为“有官网”。
- 展会或企业自述的认证、产能和荣誉，若无法核对主体、地址、范围、编号及有效期，不写成 GetFRP 已核实事实。
- 所有本轮主页均保持 `verified: false`、`enterpriseId: null`；`profilePublished: true` 只表示公开内容通过索引质量门槛，不表示认领或背书。

## 2026-08-25 发布批次

| 企业 | 展会证据 | 官网证据 | 本轮主页范围 | 发布结果 |
| --- | --- | --- | --- | --- |
| 威海光威复合材料股份有限公司 | [CCE 网上展厅：6V01](https://www.chinacompositesexpo.com/cn/netshow-123-7865053.html) | [官网](https://www.gwcfc.com/)、[碳纤维目录](https://www.gwcfc.com/photo/list-56.aspx)、[预浸料目录](https://www.gwcfc.com/photo/list-57.aspx)、[联系页](https://www.gwcfc.com/contact/list-72.aspx) | T300–T1100、M40J–M65J 碳纤维及织物，多纤维预浸料，拉挤风电碳梁，复材板/管/异形件，装备与检测服务 | 已发布、可索引 |
| 宜兴市华恒高性能纤维织造有限公司 | [CCE 网上展厅：6Q30](https://www.chinacompositesexpo.com/en/netshow-240-1123696.html) | [官网](https://www.huahengcf.com/)、[产品目录](https://www.huahengcf.com/product)、[碳管/碳板](https://www.huahengcf.com/product/carbon-fiber-products-series)、[联系页](https://www.huahengcf.com/contact) | 碳/芳纶/玄武岩/UHMWPE 织物，3D 织物和针刺预制体，预浸料，碳纤维管、板与拉挤加固板 | 已发布、可索引 |
| 中国石化上海石油化工股份有限公司 | [CCE 网上展厅：6P06](https://www.chinacompositesexpo.com/cn/netshow-3556-4508048.html) | [官网](https://spc.sinopec.com/spc/)、[产品介绍](https://spc.sinopec.com/spc/business/ywgs/A136004005Gone1.shtml)、[60K 产品发布](https://spc.sinopec.com/spc/news/qyxw/2026/6/I1521166596100325377.shtml) | PAN 原丝/预氧丝，小丝束和 24K/48K/60K 大丝束碳纤维，下游工艺适配和采购验证要求 | 已发布、可索引 |
| 埃克赛复合材料（南京）有限公司 | [CCE 网上展厅](https://www.chinacompositesexpo.com/cn/netshow-193-91112841.html) | [中国制造页](https://ideas.exelcomposites.com/exel-composites-in-china)、[工艺页](https://exelcomposites.com/guide-to-composites/our-manufacturing-processes/)、[联系页](https://exelcomposites.com/contact-us/)、[2022 中国制造整合说明](https://investors.exelcomposites.com/company-news/release/exel-composites-plc-financial-statements-release-q1-q4-2022-stable-revenue-and-higher-profitability-in-2022-compared-to-2021-3E1434281AE1F1B4/) | 南京当前拉挤、产品设计和研发能力；GFRP/CFRP 型材与管材、风电和工业型材；剔除已关闭厂址并区分集团其他工艺 | 已发布、可索引 |

## 去重结论

四家企业在本轮开始时的 99 家 Git 策展目录中均不存在以下任一重复信号：

- 完全相同或明显别名化的中文法人名；
- 完全相同的英文法人名；
- 相同官网主域名；
- 相同规范化 supplier slug。

仓库静态演示数据曾包含“光威复材股份有限公司”简略样例，但该记录没有英文名和 slug，不进入公开供应商查询；本轮 Git 策展档案是第一条达到公开主页和索引门槛的光威记录。上线后 Git 策展目录为 103 家。

## 本轮跳过与延后

| 候选企业 | 展会线索 | 核验结果 | 处理 |
| --- | --- | --- | --- |
| 沧州睿鹏复合材料有限公司 | [CCE C 字母页](https://www.chinacompositesexpo.com/cn/netshow.php?head=C) | 本轮检索未找到能与该法人独立对应的企业自有官网；展会简介不足以替代官网 | 跳过，待官网出现后复核 |
| 阿默泰材料科技（赣州）有限公司 | [CCE 网上展厅首页](https://www.chinacompositesexpo.com/cn/netshow.php) | 搜索结果与多家名称相近但业务无关的 AMTE/安迈特企业混杂，未找到可确认属于该展商的自有官网 | 跳过，避免错配主体 |
| IEN 碳匠科技有限公司 | [CCE 网上展厅首页](https://www.chinacompositesexpo.com/cn/netshow.php) | 未找到可核验的企业自有官网；搜索中的“碳匠”域名属于建筑碳核算服务，与展商碳纤维制品业务不一致 | 跳过，避免错配域名 |
| 沧州天龙复合材料有限公司 | [CCE C 字母页](https://www.chinacompositesexpo.com/cn/netshow.php?head=C) | 只找到第三方 B2B 店铺，未找到企业自有官网 | 按规则跳过 |

## 证据边界与复核提醒

- 光威和上海石化官网能通过浏览器与搜索抓取访问，但本机 `curl` 的系统信任链报告自签证书链元素。主页保留官网链接，同时提醒采购方在交换受控文件或付款前复核 TLS、域名和联系人。
- 光威产品跨多个子公司与业务板块；每个 RFQ 必须确认签约法人和实际生产场地。
- Exel 2022 年关闭并出售南京一个旧厂址，同时将中国生产整合到南京地区另一个制造点。当前官网和 2024/2025 官方披露仍提到南京制造；主页不复制可能已失效的旧地址。
- 华恒官网公开的管、板、织物、预浸料和预制体属于不同制造路线，不能只按“碳纤维制品”总称互换。
- 上海石化新闻中的产品发布或试生产不等同于即时库存；买方应以最新 TDS、牌号、批次 CoA、交期和正式报价为准。

## 后续维护方法

下一批应继续从 CCE 字母页和产品分类页抓取，先执行现有目录的中文名、英文名和域名去重，再按以下顺序核验：官网主体与备案/页脚、关于我们、产品目录、工艺能力、联系方式、官方 logo、当前证书附件、展会主体一致性。若企业官网失效、被停放、内容与展商不一致或只有第三方商铺，则保留在本文件的跳过表中，不建立可索引主页。

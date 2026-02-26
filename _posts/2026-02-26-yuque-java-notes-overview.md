---
title: "语雀《学习文档》内容整理：Java 后端知识地图"
date: "2026-02-26"
tags:
  - Java
  - 后端
  - 学习笔记
  - 分布式
categories:
  - 工具
excerpt: "本文将语雀《学习文档》中的公开内容整理为一篇可在站点阅读的文章，按限流、消息中间件、缓存、网络、JVM 与并发等主题建立知识地图，并附上原始文档入口，便于后续系统化复习与持续迭代。"
cover: "/assets/images/social-card.svg"
---

# 语雀《学习文档》内容整理：Java 后端知识地图

> 来源地址：<https://www.yuque.com/u12415318/lha2qs>
>
> 说明：以下内容根据语雀文档公开页面可见信息整理，重点用于建立学习索引与复习路径。

## 一、主题总览

该文档库围绕 Java 后端常见核心能力展开，主要覆盖：

- 并发编程与 JVM 基础
- Redis 与缓存体系
- IO 与 TCP/IP 网络基础
- 消息中间件（RocketMQ、Pulsar）
- 分布式缓存与系统设计
- 常见算法专题（GC、限流、共识等）

## 二、按主题梳理的学习路径

### 1) 基础能力（建议优先）

- **并发编程**：线程安全、并发模型、常见同步机制。
- **JVM 整理**：`.java -> .class -> 类加载 -> 方法区` 的执行链路与内存认知。
- **IO**：BIO / NIO / AIO 的模型对比与适用场景。
- **TCP/IP 协议**：协议族分层认知与通信链路基础。

### 2) 存储与性能优化

- **Redis**：数据类型与底层结构。
- **缓存**：缓存的定义、价值与常见使用方式。
- **分布式缓存**：本地缓存局限与分布式缓存演进动机。

### 3) 分布式系统进阶

- **消息中间件**：消息队列在解耦、削峰、异步化中的作用。
- **RocketMQ 和 Pulsar**：中间件选型时的场景理解。
- **限流算法**：计数器等基础限流思路及临界问题。
- **GC 算法**：垃圾回收基础机制与对象判定思路。

## 三、原文档入口（可直接跳转）

- [限流算法](https://www.yuque.com/u12415318/lha2qs/pegwro)
- [RocketMQ和pulsar](https://www.yuque.com/u12415318/lha2qs/eew7b3)
- [消息中间件](https://www.yuque.com/u12415318/lha2qs/akotg0)
- [分布式缓存](https://www.yuque.com/u12415318/lha2qs/smpalt)
- [缓存](https://www.yuque.com/u12415318/lha2qs/nzgqi7)
- [TCP/IP协议](https://www.yuque.com/u12415318/lha2qs/hcoiv5)
- [IO](https://www.yuque.com/u12415318/lha2qs/kos6ui)
- [GC算法](https://www.yuque.com/u12415318/lha2qs/qured2)
- [Redis](https://www.yuque.com/u12415318/lha2qs/hxplan)
- [并发编程](https://www.yuque.com/u12415318/lha2qs/ntk40s)
- [JVM整理](https://www.yuque.com/u12415318/lha2qs/thk72l)

## 四、建议复习顺序（4 周）

1. **第 1 周：并发 + JVM**
   - 目标：建立 Java 运行时与线程模型的统一认知。
2. **第 2 周：IO + TCP/IP + 缓存基础**
   - 目标：补齐网络与性能基础。
3. **第 3 周：Redis + 分布式缓存 + 消息队列**
   - 目标：形成系统设计中的中间件组合能力。
4. **第 4 周：限流 + GC + 综合复盘**
   - 目标：完成稳定性与性能优化主题闭环。

## 五、后续可迭代方向

- 将每个主题进一步拆为「概念卡片 + 高频面试题 + 代码示例」。
- 为每篇文档增加「3 行总结」和「1 道实践题」。
- 按“基础 / 进阶 / 实战”做分层目录，便于持续维护。

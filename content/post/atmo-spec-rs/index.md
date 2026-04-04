---
title: 大气光谱遥感学习笔记
summary: 2026年春刘奇老师大气光谱遥感课我整理笔记
date: 2026-04-03
image:

authors:
  - Boding Ouyang

tags:
  - Atmospheric Science

---

## 0. 前言

这个是我在2026年春[刘奇](https://faculty.ustc.edu.cn/liuqi/zh_CN/index.htm)老师大气光谱遥感课整理的笔记。但是我只挑其中偏理论的部分，技术的部分我不太懂。

## 1. 辐射基础

### 1.1 黑体与黑体辐射

- 黑体：
  - 发射辐射强度遵从普朗克函数，单色辐射强度仅与温度有关
  - 对入射辐射完全吸收
  - **带小孔的非透明腔体模拟黑体，小孔的逸出辐射近似为黑体辐射**
- 黑体辐射公式（普朗克定律）：$B_\lambda(T)=\frac{2hc^2}{\lambda^5}\frac{1}{e^{hc/\lambda KT}-1}$
  - 单位：$\mathrm{w\cdot m^{-2}\cdot um^{-1}\cdot sr^{-1}}$
  - 可以等价到频率域与波数域
    - <img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/7aN0JW.png" style="width:70%;" />
  - 概率密度函数，不存在绝对单色（单频）热辐射
  - **任何温度的辐射强度在任何波长都不严格为0**
  - 太阳辐射（～6000K黑体辐射），地气系统（～300K），4 um以上太阳贡献极少，长波在4 um以下极少，所以辐射传输模式可以分开独立计算
    - <img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/hEyltu.png" style="width:33%;" />

### 1.2 维恩位移定律

- 维恩位移定律
  - 普朗克函数对波长、频率什么的求导
    - 一般结果是$\lambda_\mathrm{max}T=\text{const}$
    - 对不同东西求导求出来的峰值不一样
  - 为什么不同域求导会有不同峰值？
    - 因为普朗克函数在不同域里表示的是“每单位不同变量的谱密度”，变量变换时会乘上导数因子，曲线形状改变，所以峰值位置改变

### 1.3 斯蒂芬-波尔兹曼定律

- 对普朗克函数积分
  - <img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/o4Fp5o.png" style="width:55%;" />
- 黑体各向同性发射的辐射通量密度（斯蒂芬-玻尔兹曼公式）
  - $E(T)=\sigma T^4$

### 1.4 发射率与吸收率

- 黑体在同温度下发射最强，对入射辐射吸收也最强，所以黑体的发射率和吸收率都等于 1
- 实际物质的热辐射强度由温度和发射率共同决定：
  - 某一波长下：$\varepsilon_\lambda = \frac{I_{\lambda, T}}{B_\lambda(T)}$
  - 表示实际物质发射强度与同温度黑体发射强度之比，且总有 $\varepsilon_\lambda \le 1$
- 吸收率 $a_\lambda$ 则表示物质对该波长入射辐射的吸收比例

### 1.5 亮温与色温

- 亮温：$T_B = B^{-1}(I_{\lambda})$
  - **把实际辐射强度当成黑体反推出来的温度**
  - 黑体$T_B=T$，一般物体$T_B\leq T$
  - 微波段：$\varepsilon_\lambda\approx\frac{T_B}{T}$
- 色温：颜色看起来像某个黑体时对应的温度
  - 不是由强度决定，而是由**谱形/颜色比例**决定
  - 人眼只看到可见光 → 不同温度可能看起来颜色相似

### 1.6 辐射平衡

- 基尔霍夫定律
  - 物质的单色发射率等于单色吸收率：$\varepsilon_\lambda\equiv A_\lambda$
  - 来自**热力学平衡 + 时间反演对称性**，光子吸收和发射是关于时间的对称事件
  - <img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/MIDp0T.png" style="width:35%;" />
    - 左边是黑体，右边是灰体
    - $\varepsilon\, B_\lambda(T_G)+(1-\varepsilon)\, B_\lambda(T_B)=B_\lambda(T_B)$
    - 所以$T_G=T_B$
    - 对灰体每个波长吸收=发射，即$A_\lambda B_\lambda(T)=\varepsilon_\lambda B_\lambda(T)$
    - 所以$\varepsilon_\lambda\equiv A_\lambda$
- 大气辐射传输方程
  - $\frac{dI_\lambda}{d\tau_\lambda}=I_\lambda + B_\lambda(T) + C_\lambda$
  - 普朗克函数项（发射源项）：热力学平衡系统伴随黑体辐射，局部热力学平衡体系中必然存在黑体辐射场
  - **黑体不多见，黑体辐射很普遍**

### 1.7 冷/热光源

- 热光源：热发射连续/离散谱
- 冷光源：发光并非是源自温度的热发射

### 1.8 物质色彩

- 三种来源
  - 散射：日光、灯光照射下的有色物质
  - 热发射：太阳、钨丝灯
  - 受激发射：荧光灯、LED灯
- 低温与高温下的来源
  - 低温：外界辐射源的照明条件 & 本身的微观组分及宏观结构
  - 高温：温度和物质本身的组分

### 1.9 杂项

- 温度为3K的黑体，热辐射能量在微波段（宇宙背景微波辐射）




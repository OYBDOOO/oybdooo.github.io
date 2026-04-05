---
title: 大气-海洋耦合动力学学习笔记
summary: 《大气-海洋耦合动力学》书籍笔记
date: 2026-04-03
image:

authors:
  - Boding Ouyang

tags:
  - Atmospheric Science

---

## 0. 前言

## 1. 引言

### 1.1 地球流体动力学

- 使用固定在地球上绕北极旋转的非惯性参考系，惯性力（科氏力）：
  - $\mathbf{C_0}$$=f(v,-u)$
    - $u,v$ ：向东向北速度分量
    - $f=2\Omega\sin\varphi$ （科氏力参数，北半球正，南半球负）
    - $\Omega$：地球自转角速度，$\varphi$：纬度

- 在上混合层（深度50-100 m）以下的海洋内部，以及大气边界层（高度1 km）以上的自由大气中，**湍流混合弱**
  - 大尺度运动在科氏力与压强梯度力作用下地转平衡：
    - （x为纬向，东为正；y为经向，北为正；z为海平面垂直高度）
    - $-fv=-\frac{1}{\rho}\frac{\partial p}{\partial x}$
    - $fu=-\frac{1}{\rho}\frac{\partial p}{\partial y}$

- <img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/4EYN3B.png" style="width:60%;" />

### 1.2 海洋

- 上层海洋环流由风应力$\mathbf{\tau}=(\tau_x,\tau_y)$驱动，在表面

### 1.3 大气

### 1.4 环流模式（GCM）

### 1.5 统计学方法

- 相关
  - 两个序列$x_i$、$y_i$
  - 协方差：$R_{xy}\equiv \frac{1}{N}\sum\limits_{i=1}^{N}x_i y_i$
  - 互相关系数：$r_{xy}=\frac{R_{xy}}{\sigma_x\sigma_y}=\frac{1}{N} \sum\limits_{i=1}^{N}\frac{x_i}{\sigma_x} \frac{y_i}{\sigma_y}$
    - 表示x和y之间的紧密程度，$|r_{xy}|\leq 1$
  - 
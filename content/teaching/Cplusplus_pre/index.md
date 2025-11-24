---
title: 大学C/C++程序设计暑期衔接课
summary: 大学C/C++程序设计暑期衔接课前置知识
date: 2023-10-24
type: docs
math: false
tags:
  - C
  - C++
  - Undergraduate
image:
  caption: 'just a image'
---

## 〇、写在最前面

哈咯，大家好！这个页面是**大学C/C++程序设计暑期衔接课**前置知识的页面。在这里，你将会了解一些在开始学习 C/C++ 编程之前需要掌握的基本内容。无论你是第一次接触编程，还是有一些基础（~~比如Scratch~~），这些准备工作都能帮助你顺利开始课程。

## 一、选购电脑

对于准大学生来说，选择一款合适的电脑不仅提高学习效率，还会提高日后的生活质量。由于绝大部分大学宿舍条件有限，没有空间去放置台式机、显示器等设备，并且没有不间断电源，所以这里选购电脑的大前提是**笔记本电脑**。

### 1、操作系统的选择

- Windows：最标准的操作系统，也是绝大部分同学正在使用的操作系统。
- macOS：macOS的优势在于MacBook的超长续航、类Unix系统以及它与iPhone、iPad、AirPods等设备的联动。但是它的缺点是对于大学期间的一些软件（尤其是工科）并不兼容、~~不适合打游戏~~以及~~价格昂贵~~。但是对于拥有其他苹果设备，并且不怕“折腾”软件的理工科学生或者设计类方向的学生建议选购。**但是要做好经常“折腾”软件的心里准备**。
- Linux：不建议新手选购，适合“极客”一类的喜欢开源软件以及“技术流”的同学使用。**所以尽量不要选购一些只预装Linux系统的笔记本！！！**

### 2、笔记本类型的选择

**如果你选择了Windows系统：**

- 轻薄本：顾名思义，又轻又薄，方便携带，一般配备较长的电池续航，可以满足日常办公（Word、Excel、PPT等）、浏览网页、阅读文献和简单的编程，一般不配备独立的GPU。如果非计算机、人工智能等专业建议选择。
- 商务本：可以理解轻薄本与游戏本取其中，同时继承了两个的优点，也同时继承了缺点。比较出名的是ThinkPad系列等（不代表希望你选ThinkPad！）。是否选择取决于具体情况。
- 游戏本：**游戏本不是只为了打游戏！！！** 游戏本是为高性能需求设计的笔记本，比如复杂程序的运行、图形处理、深度学习以及~~打游戏~~。由于散热优越，所以对比同样配置的轻薄本运行更快。缺点在于体型大、比较重最主要的是**续航很短，一般必须插着电运行**。建议计算机、人工智能等很需要计算机配置的专业的同学选择。
    - 如果预算很充足，也可以一个游戏本放在寝室，带轻薄本去上课，通过SSH等方式进行访问。
- 特殊类型：比如带触屏、可以写字的Microsoft Surface Pro系列，类似iPad，但是是Windows系统。有特殊需求可以选择，但是价格昂贵。

**如果你选择了macOS系统**：

- 那你只有MacBook Air和MacBook Pro可以选，按照预算选择就可以了，基本都够用。

### 3、笔记本配置的选择

一般在选购笔记本时，配置页面都会写诸如“16GB+256GB”的参数。这里的“+”左右分别代表两个核心部件：内存和硬盘的容量。

- 内存：内存越大，可同时运行的程序和打开的文件就越多，切换窗口时更流畅。常用选择有8GB/16GB/24GB/……。推荐16GB起步，多多益善。
- 硬盘容量：存储系统、软件、文档等。有的时候大家说的“手机内存”在笔记本上就是硬盘容量。对于学理工科的同学建议最少512GB，个人推荐1TB（1024GB），因为一些工业软件占很多硬盘容量。并且大家要经常性地定时清理，~~如果不学会清理硬盘多少都不够存~~。

### 4、笔记本哪里买

**不要去电脑城！！！不要去电脑城！！！不要去电脑城！！！** 重要的事情说三遍！

即使是熟人推荐也不要去电脑城买，水很深。

建议使用京东淘宝等网购平台购买。一定一定要领取国家补贴（京东自营的都有）和教育补贴（有的品牌有）！！！国家补贴一般是八折，教育补贴一般是九折，这俩可以叠加。并且网购平台现在针对高考结束后的学生有更大的优惠，可以在网购平台首页留意一下。

各位可以先确定配置然后再去搜索，此处不会推荐任何一个品牌（~~它们也不给我广告费~~），可以微信群里私聊我，我会按照专业需求推荐。

## 二、选购鼠标

建议选购无线蓝牙鼠标，主要是因为省地方，省接口。

## 三、预装这门课程需要的软件

这门课程教大家C/C++编程，需要大家将必备的软件装好。这样可以保证课堂代码能顺利运行，也方便课后练习。

### 1、对于Windows系统

Windows系统下安装比较简单，只需要点击[这个链接，密码cplusplus](https://pan.ustc.edu.cn/share/index/d0bdfe7edf164ecfa69c?p=1)下载exe文件。下载完后双击，然后按照它的引导不断点击Next直到：

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/yY9GoJ.png" alt="image" width="400">


此处可以选择简体中文/Chinese，这样你的软件界面就是中文了（也同时建议学有余力的同学选择英文）。

我们运行一个简单的程序验证是否安装成功，首先我们点击右上角第一个的“File”，然后选择第一个选项新建源代码。

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/59SvOP.png" alt="image" width="550">

点击后将如下代码复制粘贴到文件中（选中后复制快捷键为Ctrl+C，粘贴为Ctrl+V）。

```cpp
#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World" << endl;
    return 0;
}
```

此时点击红色箭头所指的图标，这一步叫做编译，本课程后边会提到。

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/L0YH6L.png" alt="image" width="500">

此时需要将代码命名为一个你想要的名称并且存储在一个你想存放的文件夹里，注意保存时文件后缀名应该是.cpp。

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/bJL0Hx.png" alt="image" width="400">

然后点击如下箭头所指的图标，这一步叫做运行，本课程后边会提到。

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/IRcrND.png" alt="image" width="500">

此时程序应该跳出一个黑色的窗口，并且窗口里有“Hello, World”。恭喜你，你配置成功了！这也是你写的第一个程序！

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/WNJP28.png" alt="image" width="400">

### 2、对于macOS系统

> 如果你选择了macOS系统，你应该要做好经常“折腾”软件的心里准备。

对于macOS，配置C++有一点困难，首先点击“Command⌘+空格键”打开聚焦搜索，然后输入terminal，选择最上面出现的“终端”：

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/IJ0Xxo.png" alt="image" width="400">

然后在跳出的终端中输入“xcode-select --install”，回车，然后应该会有安装的提示，可能需要一些时间安装。

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/Rty3lF.png" alt="image" width="400">

安装成功后输入“xcode-select --version”，如果如下图所示返回版本号则安装成功。

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/MqsNBn.png" alt="image" width="400">

然后点击[这个链接，密码vscode](https://pan.ustc.edu.cn/share/index/95f7a6d8912f48c5af02?p=1)下载软件，下载完事后点击这个zip文件，会自动解压缩到文件夹里。

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/qJ8moy.png" alt="image" width="500">

然后将解压后的Visual Studio Code应用程序文件拖拽到应用程序里就完成了第一步，之后可以通过启动台找到软件并打开。

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/gPQAj2.png" alt="image" width="500">

打开后先点击左上角的图标，点击后选择“Open Folder”打开一个文件夹，建议自己先新建一个。

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/hbSexb.png" alt="image" width="500">

然后点击右上角的新建文件图标，新建一个名叫test.cpp的文件。

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/k3jUJ2.png" alt="image" width="400">

此时右下角应该出现一个弹窗，叉掉，不需要点击。

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/BNcR1M.png" alt="image" width="400">

然后点击左边从上往下数第五个图标，在上面搜索到Code Runner组件，Install即可。

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/va9g3m.png" alt="image" width="400">

然后我们点击Code Runner，点击小齿轮，然后选择Settings。

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/e0iK6p.png" alt="image" width="500">

然后翻到这三个选项勾选上。

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/TH6MM9.png" alt="image" width="400">

此时我们关闭并重新打开VSCode软件，选择你的cpp文件位置，然后将如下代码复制粘贴到你的代码文件中（复制快捷键是Command⌘+C，粘贴是Command⌘+V），粘贴完后Command⌘+S保存代码，之后点击右上角的运行按钮。

```cpp
#include<iostream>
using namespace std;
int main() {
    int a, b;
    cin>>a>>b;
    cout<<a+b<<endl;
    return 0;
}
```

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/zFbjBE.png" alt="image" width="550">

然后在底下的“TERMINAL”窗口中输入1 2，然后回车，我们可以看到它输出的结果3。这也是你写的第一个程序！

<img src="https://raw.githubusercontent.com/OYBDOOO/oss/master/uPic/g3GbyI.png" alt="image" width="550">

macOS上配置C++环境就是如此费劲，往后还有很多东西需要配置（比如如何Debug），~~相信你已经从中学到了很多~~。

## 四、其他准备

（~~之前不怎么玩电脑游戏的~~）同学们可以花些时间于：

- 电脑打字，熟悉键盘
- 熟悉Windows/macOS操作系统的各种基本操作
- Word/Excel/PowerPoint等基本办公软件等使用
- 明白文件的储存原理
- 折腾折腾下载一些有趣的软件

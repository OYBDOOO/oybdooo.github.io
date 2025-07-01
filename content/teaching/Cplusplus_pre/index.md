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

哈咯，大家好！这个页面是**嘉赢教育大学C/C++程序设计暑期衔接课**前置知识的页面。在这里，你将会了解一些在开始学习 C/C++ 编程之前需要掌握的基本内容。无论你是第一次接触编程，还是有一些基础（~~比如Scratch~~），这些准备工作都能帮助你顺利开始课程。

## 一、选购电脑

对于准大学生来说，选择一款合适的电脑不仅影响学习效率，还会影响到日后的生活。由于绝大部分大学宿舍条件有限，没有空间去放置台式机、显示器等设备，所以这里选购电脑的大前提是**笔记本电脑**。

### 1、操作系统的选择

- Windows：最标准的操作系统，也是绝大部分同学正在使用的操作系统。
- macOS：macOS的优势在于MacBook的超长续航、类Unix系统以及它与iPhone、iPad、AirPods等设备的联动。但是它的缺点是对于大学期间的一些软件（尤其是工科）并不兼容、~~不适合打游戏~~以及~~价格昂贵~~。但是对于拥有其他苹果设备，并且不怕“折腾”软件的理工科学生或者设计类方向的学生建议选购。**但是要做好经常“折腾”软件的心里准备**。
- Linux：不建议新手选购，适合“极客”一类的喜欢开源软件以及“技术流”的同学使用。**所以尽量不要选购一些只预装Linux系统的笔记本！！！**

### 2、笔记本类型的选择

如果你选择了Windows系统：

- 轻薄本：顾名思义，又轻又薄，方便携带，
- 商务本：
- 游戏本：

如果你选择了macOS系统，那你只有MacBook Air和MacBook Pro可以选，按照预算选择就可以了。


[Hugo Blox Builder](https://hugoblox.com) is designed to give technical content creators a seamless experience. You can focus on the content and the Hugo Blox Builder which this template is built upon handles the rest.

**Embed videos, podcasts, code, LaTeX math, and even test students!**

On this page, you'll find some examples of the types of technical content that can be rendered with Hugo Blox.

## Video

Teach your course by sharing videos with your students. Choose from one of the following approaches:

{{< youtube D2vj0WcvH5c >}}

**Youtube**:

    {{</* youtube w7Ft2ymGmfc */>}}

**Bilibili**:

    {{</* bilibili id="BV1WV4y1r7DF" */>}}

**Video file**

Videos may be added to a page by either placing them in your `assets/media/` media library or in your [page's folder](https://gohugo.io/content-management/page-bundles/), and then embedding them with the _video_ shortcode:

    {{</* video src="my_video.mp4" controls="yes" */>}}

## Podcast

You can add a podcast or music to a page by placing the MP3 file in the page's folder or the media library folder and then embedding the audio on your page with the _audio_ shortcode:

    {{</* audio src="ambient-piano.mp3" */>}}

Try it out:

{{< audio src="ambient-piano.mp3" >}}

## Test students

Provide a simple yet fun self-assessment by revealing the solutions to challenges with the `spoiler` shortcode:

```markdown
{{</* spoiler text="👉 Click to view the solution" */>}}
You found me!
{{</* /spoiler */>}}
```

renders as

{{< spoiler text="👉 Click to view the solution" >}} You found me 🎉 {{< /spoiler >}}

## Math

Hugo Blox Builder supports a Markdown extension for $\LaTeX$ math. You can enable this feature by toggling the `math` option in your `config/_default/params.yaml` file.

To render _inline_ or _block_ math, wrap your LaTeX math with `{{</* math */>}}$...${{</* /math */>}}` or `{{</* math */>}}$$...$${{</* /math */>}}`, respectively.

{{% callout note %}}
We wrap the LaTeX math in the Hugo Blox _math_ shortcode to prevent Hugo rendering our math as Markdown.
{{% /callout %}}

Example **math block**:

```latex
{{</* math */>}}
$$
\gamma_{n} = \frac{ \left | \left (\mathbf x_{n} - \mathbf x_{n-1} \right )^T \left [\nabla F (\mathbf x_{n}) - \nabla F (\mathbf x_{n-1}) \right ] \right |}{\left \|\nabla F(\mathbf{x}_{n}) - \nabla F(\mathbf{x}_{n-1}) \right \|^2}
$$
{{</* /math */>}}
```

renders as

{{< math >}}
$$\gamma_{n} = \frac{ \left | \left (\mathbf x_{n} - \mathbf x_{n-1} \right )^T \left [\nabla F (\mathbf x_{n}) - \nabla F (\mathbf x_{n-1}) \right ] \right |}{\left \|\nabla F(\mathbf{x}_{n}) - \nabla F(\mathbf{x}_{n-1}) \right \|^2}$$
{{< /math >}}

Example **inline math** `{{</* math */>}}$\nabla F(\mathbf{x}_{n})${{</* /math */>}}` renders as {{< math >}}$\nabla F(\mathbf{x}_{n})${{< /math >}}.

Example **multi-line math** using the math linebreak (`\\`):

```latex
{{</* math */>}}
$$f(k;p_{0}^{*}) = \begin{cases}p_{0}^{*} & \text{if }k=1, \\
1-p_{0}^{*} & \text{if }k=0.\end{cases}$$
{{</* /math */>}}
```

renders as

{{< math >}}

$$
f(k;p_{0}^{*}) = \begin{cases}p_{0}^{*} & \text{if }k=1, \\
1-p_{0}^{*} & \text{if }k=0.\end{cases}
$$

{{< /math >}}

## Code

Hugo Blox Builder utilises Hugo's Markdown extension for highlighting code syntax. The code theme can be selected in the `config/_default/params.yaml` file.


    ```python
    import pandas as pd
    data = pd.read_csv("data.csv")
    data.head()
    ```

renders as

```python
import pandas as pd
data = pd.read_csv("data.csv")
data.head()
```

## Inline Images

```go
{{</* icon name="python" */>}} Python
```

renders as

{{< icon name="python" >}} Python

## Did you find this page helpful? Consider sharing it 🙌

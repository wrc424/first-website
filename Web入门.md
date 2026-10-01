- **Node.js（node）**：让 JavaScript 可以在电脑终端里运行，不只是在网页浏览器中运行。它相当于 JavaScript 的运行环境。（负责运行JavaScript）
    
- **npm**：Node.js 自带的“工具/代码包下载器”。用它可以安装别人做好的开发工具和功能包，例如 Prettier。（负责安装和管理JavaScript工具）
	- 下载开发工具或功能包，例如 `prettier`
	- 记录项目用了哪些工具
	- 更新、删除这些工具
	- 运行项目预先配置好的命令
- **Prettier** 是一个“自动整理代码格式”的工具。
	- 它会自动统一代码的缩进、换行、引号、逗号、括号等样式，例如把杂乱的 JavaScript、TypeScript、JSON、CSS、HTML、Markdown 排版成一致、易读的格式。
- **HTML基础：创建内容**
	- 创建文档
		- `<!doctype html>`——文档类型这是必不可少的开头。
		- `<html></html>`——[`<html>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/html) 元素。该元素包含整个页面的所有内容，有时候也称作根元素。
		- `<head></head>`——[`<head>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/head) 元素。该元素作为想在 HTML 页面中包含但不想向用户显示的内容的容器。
		- `<meta charset="utf-8">`——该元素指明你的文档使用 [UTF-8](https://developer.mozilla.org/zh-CN/docs/Glossary/UTF-8) 字符编码，UTF-8 包括世界绝大多数书写语言的字符。
		- `<meta name="viewport" content="width=device-width">`——[视口元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts#%E7%A7%BB%E5%8A%A8%E8%AE%BE%E5%A4%87%E7%9A%84%E8%A7%86%E5%8F%A3)可以确保页面以视口宽度进行渲染
		- - `<title></title>`——[`<title>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/title) 元素。该元素设置页面的标题，显示在浏览器标签页上，也作为收藏网页的描述文字。
		- `<body></body>`——[`<body>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/body) 元素。该元素包含期望让用户在访问页面时看到的全部内容
	- 嵌入图像
		- <img src="" alt="My test image" />
		- 在 [`alt` 属性]中，是图像的描述内容
	- 标题
		- 从 h1到h6
	- 段落
		- 用p包裹
	- 列表
		- 无序ul
		- 有序ol
			- 用li包裹
	- 链接 
		- a
		- 为a添加一个href属性，href代表超文本应用（_**h**ypertext **ref**erence_）
- **CSS基础（样式表语言，选择性的为HTML元素添加样式）**
	- 规则集
		- 选择器
			- HTML 元素名位于规则集的开头。它定义了需要添加样式的元素
		- 声明
			- 它是一条单独的规则（如 `color: red;`）。用来指定为元素的哪个**属性**添加样式。
		- 属性
			- 为 HTML 元素添加样式的方式（如```color```）
		- 属性值
			- 属性：属性值
	- CSS布局
		- ```padding```内边距：内容周围的空间
		- ```border```边框：紧接着内边距的实线
			- `border: 5px solid black;` 这是为边框的宽度、样式和颜色设置的值。
		- ```margin```外边距：围绕元素边框外侧的空间
			- `margin: 0 auto;` 当你在 `margin` 或 `padding` 这样的属性上设置两个值时，第一个值影响元素的**上下**方向（在这个例子中设置为 `0`）；第二个值影响**左右**方向。（这里，`auto` 是一个特殊的值，它将可用的水平空间平均分配给左边和右边）。
			- 如果是四个值，就是上下左右的顺序
		- `text-shadow` 对元素的文本内容施加阴影
			- 第一个像素值设置阴影与文本的**水平偏移量**：阴影水平方向移动的距离（向右为正值）。
			- 第二个像素值设置阴影与文本的**垂直偏移量**：阴影垂直方向移动的距离（向下为正值）。
			- 第三个像素值设置阴影的**模糊半径**。值越大产生的阴影越模糊。
			- 第四个值设置阴影的基色。
		- `display: block`
			- 把图片当成“块级元素”来排列
				- 图片是行级元素，为了使图像有外边距，使用`display: block`给予其块级行为
- **JavaScript基础（为网站添加交互性）**
	- ```querySelector（"h1"）```函数获取标题的引用
		- 与 CSS 选择器的用法非常相像。若要对某个元素进行操作，首先得选择它。
	- ```textContent```表示标题内容
	- rk：JavaScript分号使用
		- 必填：当两个语句位于同一行时
		- 可选：语句之后
		- 在右花括号或if/for/while/switch语句圆括号后不加分号
	- 变量
		- 可以字母、下划线、美元符号开头，后跟数字或大小写字母
		- 声明变量：
			- var+变量名：用来声明**局部**变量和**全局**变量
			- const/let+变量名：用来声明**块级作用域**的局部变量
				- 全局作用域：在脚本模式中运行的所有代码的默认作用域。
				- 模块作用域：在模块模式中运行的代码的作用域。
				- 函数作用域：由函数创建的作用域。
				- 块级作用域：用一对花括号创建的作用域。
	- 变量提升
		- 用 `var` 声明的变量会被提升，意味着你可以在该变量所在的作用域的任意地方引用该变量，即使还没有到达变量声明的地方。
	- 常量
		- 可以用const创建一个只读命名常量，必须为其初始化一个值
	- 数据结构和类型
		- 数据类型
			- Boolean
			- null（表示空值的关键字）
			- undefined
			- Number（整数or浮点数）
			- BigInt（任意精度的整数）
			- String（表示文本值的字符序列）
			- Symbol（其实例是唯一且不可变的数据类型）
		- 函数
			- 定义
				- **function square(number){**
					- return number * number;
				- }
			- 参数本质是**按值**传递给函数的（函数中给参数重新赋值，不会改到函数外的变量）
			- **console.log();   在控制台输出**
		- 数据类型的转换
			- 声明变量时可以不必指定该变量的数据类型，在脚本执行期间会根据需要自动转换数据类型
		- 字符串转换为数字
			- **parseInt(_string_, _radix_)** 解析一个字符串并返回指定基数的十进制整数，`radix` 是 2-36 之间的整数，表示被解析字符串的基数。
			- **parseFloat（）**
			- ```"1.1" + "1.1" = "1.11.1"
				(+"1.1") + (+"1.1") = 2.2
				// 注意：括号是为了清晰起见而添加的，不是必需的。
			  ```
			-  字面量：可以表示值。这些字面量是脚本中按字面意思给出的固定值，而不是变量
				- 数组字面量
				- 布尔字面量
					- 布尔值只有两种 true or false
					- Boolean（）可以把别的值转换成true or false
						- “没有内容”的值 → false    “有内容”的值   → true
						- ```Boolean(false);     // false
							Boolean(0);         // false
							Boolean("");        // false，空字符串
							Boolean(null);      // false
							Boolean(undefined); // false
						  ```
				  - 数字字面量
				  - 对象字面量
					  - {属性名：属性值}
					  - 对象属性名字可以是任意字符串，包括空串。如果对象属性名字不是合法的 JavaScrip标识符或数字，它必须用引号包裹。通过方括号表示法（`[]`）来访问。
				  - RegExp字面量
					  - ```const re = /ab+c/;
					    ```
					- 想在文本中找什么样的内容
				- 字符串字面量
				
				
		
		
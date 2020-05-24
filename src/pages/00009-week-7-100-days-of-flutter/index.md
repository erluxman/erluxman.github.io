---
title: Flutter Tips 43-49
date: '2020-05-25'
spoiler: 7th batch of 7 tips and tricks on the series 100DaysOfFlutter.
---

## #Day 43 Collection if & for.

Do you miss number ranges like these in dart?

    for (i in 1..4) print(i) //Kotlin Range
    for (i until 1..4) print(i) //Kotlin Range

No problem. Just define this Range Extension on numbers and you will be good to go. 

    extension Range on num {
        List<num> until(num endPoint) {
            var exclusive = to(endPoint);
            exclusive.removeLast();
            return exclusive;
        }

        List<num> to(num endPoint) {
            var numbers = <num>[];
            if (endPoint > this) {
                for (int i = this; i <= endPoint; i++) {
                    numbers.add(i);
                }
            } else {
                for (int i = this; i >= endPoint; i--) {
                    numbers.add(i);
                }
            }
            return numbers;
        }
    }

Then Simply use them  like this : 

    void main() {
        // 2,3,4,5,6,7,8,9,10
        for (int i in 2.to(10)) { print(i); }

        // 2,3,4,5,6,7,8,9
        for (int i in 2.until(10)) { print(i); }

        // 2,1,0,-1,-2,-3,-4,-5,-6,-7
        for (int i in 2.to(-7)) { print(i); }

        // 2,1,0,-1,-2,-3,-4,-5,-6
        for (int i in 2.until(-7)) { print(i); }
    }

[try in dartpad](https://dartpad.dartlang.org/b14078511495bc822dfbc6895c273e15)

If you want more advanced range and other cool extensions use [dartx](https://github.com/leisim/dartx)


## #Day 44 Collection if & for.

If you logically decide wheather to add a particular item into collection or not? It looks like no big deal when we dealing with adding normal objects to a collection as we could simply add collection items inside if or for statement.

But if we want to conditionally add widget or list of them inside another as one as it's children, it's a pain.

From dart 2.3 onwards, we can use `collection if` and `collection for` operators for adding items to a collection `conditionally` or `in bulk`.

### **Without collection if  or collection for**
        ListView(
            children: [
                Title(news.headline),
                
                (news.cover != null) ? FeatureImage(news.cover) : Container(),
                
                ...news.paragraphs.map((paragraph) => Paragraph(paragraph)).toList(),
                
                (news.author != null) ? Authored(news.author) : Container(),
                
                Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                    (selected > 0) ? nextButton() : Container(),
                    (selected < (allNews.length - 1)) ? prevButton() : Container(),
                    ],
                )
            ],
        )



### **With collection if  or collection for**
        ListView(
            children: [
                Title(news.headline),
                
                if (news.cover != null) FeatureImage(news.cover),
                
                for (var paragraph in news.paragraphs) Paragraph(paragraph),
                
                if (news.author != null) Authored(news.author),
                
                Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                    if (selected > 0) nextButton(),
                    if (selected < (allNews.length - 1)) prevButton(),
                    ],
                )
            ],
        )


[try on codepen](https://codepen.io/erluxman/pen/yLYGbdy)

![](44collectioniffor.png)


## #Day45 tear-off vs lambda vs function call.

### When possible we should use tear-off instead of these:

1.  ___`A function call if caller and calling functions have same arguments.`___
        
 ![](45sameargsfunctions.png)

2. ___`A lambda.`___
   
 ![](45sameargsfunctions.png)



## #Day46 ColorFilterd Widget

Want to apply filter to image or any widget? Use ColorFiltered widget like this.

    ColorFiltered(
        colorFilter :ColorFilter.mode(Colors.pink,BlendMode.multiply),
        child: //Widget
    )

Try different BlendMode and colors.

ColorFiltered works with any widgets as child not just Image.


[get the code](https://gist.github.com/erluxman/7b5c1dfec4461b147d9b00a86d080bb5)

![](46colorfiltered.gif)

## #Day47 ShaderMask Widget.

If you want to apply gradient mask or Image mask to any widget in flutter ShaderMask is the tool to use. 

Just give `blendMode` and `shaderCallback` to ShaderMask along with the Child that you want to mask.

Gradients can be easily converted to Shader with createShader() method.


    ShaderMask(
        blendMode: BlendMode.srcIn,
        shaderCallback: (Rect bound) {
            return LinearGradient(colors: <Color>[
                Colors.deepOrange,
                Colors.blue,
                Colors.green,
                Colors.amber,
            ]).createShader(bound);
        },
        child: Icon(
            Icons.ac_unit,
            size: 200,
            ),
        )
[get the code](https://gist.github.com/erluxman/b6f1166ac19b7b2654ee2102c58a8837)

![](47mask.png)

## #Day47 ShaderMask Widget.

 If you ever enjoyed Room database in Android or are looking for a Good ORM in Flutter that you can define a Database Table's Schema and just being able to save it, Floor is a good choice. You can even get Stream output and get notification on data change. 

 Caution : This is  still on it's early stage but if we start using it and give more feedback, it will be stable sooner. In my openion this is a Ideal ORM for Flutter even though Moor is more mature and bettle tested. 
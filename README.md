# ODIN-Linked-List

## I wrote the code with the help of Chat-GPT

I run the the following test functions and they worked

SOME EXAMPLES 
<hr>
<code>const list = new LinkedList();</code>

### append() example
<code>list.append(10);
list.append(20);
list.append(30);
console.log(list.toString());
</code> 
OUTPUT: (10) -> (20) -> (30) -> null

### prepend() example
<code>list.prepend(5);
console.log(list.toString());
</code>
OUTPUT: (5) -> (10) -> (20) -> (30) -> null

### insert() example
<code>list.insert(2, 15);
console.log(list.toString());
</code>
OUTPUT: (5) -> (10) -> (15) -> (20) -> (30) -> null

### removeAt() example
<code>list.removeAt(3);
console.log(list.toString()); 
</code>
OUTPUT: (5) -> (10) -> (15) -> (30) -> null

### at() example
<code>console.log(list.at(2));</code>
<BR />OUTPUT: 15

### isEmpty() example
<code>console.log(list.isEmpty());</code>
<BR />OUTPUT: false

### size() example
<code>console.log(list.size());</code>
<BR />OUTPUT: 4

### contains() example
<code>console.log(list.contains(20));</code>
<BR />OUTPUT: false
<BR /><code>console.log(list.contains(10));</code>
<BR />OUTPUT: true

### find() example
<code>console.log(list.find(15));</code>
<BR />OUTPUT: 2
<BR /><code>console.log(list.find(25));</code>
<BR />OUTPUT: null

### pop() example
<code>list.pop();</code>
<BR /><code>console.log(list.toString());</code>
<BR />OUTPUT: (5) -> (10) -> (15) -> null

### toString() example
<code>console.log(list.toString());</code>
<BR />OUTPUT: (5) -> (10) -> (15) -> null



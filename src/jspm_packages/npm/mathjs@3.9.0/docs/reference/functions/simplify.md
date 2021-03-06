<!-- Note: This file is automatically generated from source code comments. Changes made in this file will be overridden. -->

# Function simplify

Simplify an expression tree.

It's possible to pass a custom set of rules to the function as second
argument. A rule can be specified as an object, string, or function:

    var rules = [
      { l: 'n1*n3 + n2*n3', r: '(n1+n2)*n3' },
      'n1*n3 + n2*n3 -> (n1+n2)*n3',
      function (node) {
        // ... return a new node or return the node unchanged
        return node
      }
    ]


The default list with rules is exposed on the function as `simplify.rules`
and can be used as a basis to built a set of custom rules.

For more details on the theory, see:

- http://stackoverflow.com/questions/7540227/strategies-for-simplifying-math-expressions
- https://en.wikipedia.org/wiki/Symbolic_computation#Simplification


## Syntax

```js
simplify(expr)
simplify(expr, rules)
```

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
`expr` | Node &#124; string |  The expression to be simplified
`rules` | Array&lt;{l:string, r: string} &#124; string &#124; function&gt; |  Optional list with custom rules

### Returns

Type | Description
---- | -----------
Node | Returns the simplified form of `expr`


## Examples

```js
math.simplify('2 * 1 * x ^ (2 - 1)');      // Node {2 * x}
var f = math.parse('2 * 1 * x ^ (2 - 1)');
math.simplify(f);                          // Node {2 * x}
```


## See also

[derivative](derivative.md),
[parse](parse.md),
[eval](eval.md)

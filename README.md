# react-script
Created with CodeSandbox

How to use React memo, and useCallBack

As a component wrapped by React memo, it only is rendered when its props change.

In the script, I add a useCallBack that make onClick function will not be changed when parent Component is rendered.

=> onClick prop will not be changed => Component listen change from props will not be changed

### Use case: I don't want child component re-rendered
check PR https://github.com/nvhoc/react-script/pull/1

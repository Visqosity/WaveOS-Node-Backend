## Creating A Server Application
The WaveOS Node Backend system was redesigned from scratch to be as modular and changable as possible. Keeping up with this goal, the server runs applications as individual JavaScript files that are placed within the `./apps` directory. You can follow these simple steps to create an application:

### Setting Things Up:
1. Create a new file with the `.js` suffix in the `./apps` directory
2. Start with the basic code:

```js
// Updated <DATE: M DD, YYYY>
// Authored by <Username(s)>

// Local imports
// <Place all your local imports here in place of this comment>

// Application definitions
function application() {
  // Place all cases into the main function
  // This is the *only* function that will be called by the server
}

// <Define all of your helped functions here>

// Export helped functions
exports.<functionname> = <functionname>;

// Application export
exports.application = application;

```

###### You should remove all comments that contain the`<` and `>` characters and replace them with actual values. Comments that do not contain those characters are standard documentation and we do not recommend removing them (unless you know exactly what you are doing or improving upon), so that the file remains readable to others.

3. Next, to implement your application, add the following to `./server.js`:

```js
if (packet.application = <YOUR_APPLICATION_NAME_HERE>) {
  return (<YOUR_APPLICATION_EXPORT_NAME_HERE>.application(<YOUR_APPLICATION_INPUTS_HERE>));
} 
```
###### Again, replace all strings starting and ending with `<` and `>` with the actual constant.

4. And thats it! You're done
> ##### Easy wasn't it? :P
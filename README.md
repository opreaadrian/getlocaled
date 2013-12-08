getlocaled
==========

Lightweight JS plugin that sets some common-sense, language-related attributes.

In order to use the plugin, inside your page, preferably in the footer, link to the script and then initialize the plugin like in the example below:


```
<script src="js/getlocaled.js"></script>
<script>
    // This looks for all arabic languages setup and changes the text-direction
    GetLocaled.init('ar', 'rtl');
</script>
```

The plugin's API is as follows: `GetLocaled.init(<String> locale, <String> direction)`.

It's awaiting contributors, so feel free to issue a `pull request` if you think you have a cool idea.

###Testing

A testing workflow for all contributors is yet to be defined, but it's coming...

getlocaled
==========

Lightweight JS plugin that sets some common-sense, language-related attributes. This emerged from the need of a plugin that will do just that: detect the browser language, and set the text direction and lang of the document, to reflect the user's locale. Not 100% supported, but it does the job right, so I thought I'd share.

###Demo
In order to use the plugin, inside your page, preferably in the footer, link to the script and then initialize the plugin like in the example below:


```
<script src="js/getlocaled.js"></script>
<script>
    // This looks for all arabic languages setup and changes the text-direction
    GetLocaled.init('ar', 'rtl');
</script>
```

The plugin's API is as follows: `GetLocaled.init(<String> locale, <String> direction)`.

###Testing

A testing workflow for all contributors is yet to be defined, but it's coming...

### Limitations
It has some issues detecting the locale in Internet Explorer, but, then again, who doesn't have problems with good ol' IE?
I thought about using `geolocation` for this, but this would be a pain if your user is travelling. So if you have someone visiting Saudi Arabia, you definitely wouldn't want to present him with your English site, having RTL text display.
Ajax request and `headers` detection was also planned but this implies the use of backend, more or less, and I wanted to keep the library as lightweight as possible.

### Contribution
This is open software, so feel free to issue a `pull request` if you think you have a cool idea.

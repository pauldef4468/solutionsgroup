var $zoho = $zoho || {};
$zoho.salesiq = $zoho.salesiq || {
  widgetcode:
    "df8d5aa36d0b12caffaa5f847ad65324390e41b7b7cf5a449e334c2f1ffe798003fb7a5d082031991fe355ef527d99cf",
  values: {},
  ready: function () {},
};

var d = document;
s = d.createElement("script");
s.type = "text/javascript";
s.id = "zsiqscript";
s.defer = true;
s.src = "https://salesiq.zoho.com/widget";

t = d.getElementsByTagName("script")[0];
// console.log(t);
// console.log(s);
t.parentNode.insertBefore(s, t);

// A local search script with the help of [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search)
// Copyright (C) 2017
// Liam Huang <http://github.com/Liam0205>
// This library is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as
// published by the Free Software Foundation; either version 2.1 of the
// License, or (at your option) any later version.
//
// This library is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301 USA
//

var searchFunc = function (path, search_id, content_id) {
  // 0x00. environment initialization
  'use strict';
  var BTN = "<i id='local-search-close'></i>";
  var SEARCH_START = "<span>" + $('#local-search-result').data('start') + "</span>",
      SEARCH_INITIALISE = "<span class='local-search-empty'>" + $('#local-search-result').data('initialise') + "<span>",
      SEARCH_EMPTY = "<span class='local-search-empty'>" + $('#local-search-result').data('empty') + "<span>";
  var $input = document.getElementById(search_id);
  var $resultContent = document.getElementById(content_id);
  $resultContent.innerHTML = BTN + "<ul>" + SEARCH_INITIALISE + "</ul>";
  $.ajax({
    // 0x01. load xml file
    url: path,
    dataType: "xml",
    success: function (xmlResponse) {
      // 0x02. parse xml file
      var datas = $("entry", xmlResponse).map(function () {
        return {
          title: $("title", this).text(),
          content: $("content", this).text(),
          url: $("url", this).text()
        };
      }).get();
      $resultContent.innerHTML = "";

      $input.addEventListener('input', function () {
        // 0x03. parse query to keywords list
        var str = '<ul class=\"search-result-list\">';
        var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
        $resultContent.innerHTML = "";
        if (this.value.trim().length <= 0) {
          $('#local-search-result').html(SEARCH_START);
          return;
        }
        // 0x04. perform local searching
        datas.forEach(function (data) {
          var isMatch = true;
          var content_index = [];
          if (!data.title || data.title.trim() === '') {
            data.title = "Untitled";
          }
          var orig_data_title = data.title.trim();
          var data_title = orig_data_title.toLowerCase();
          var orig_data_content = data.content.trim().replace(/<[^>]+>/g, "");
          var data_content = orig_data_content.toLowerCase();
          var data_url = /^\//.test(data.url) ? '' : '/' + data.url;
          var index_title = -1;
          var index_content = -1;
          var first_occur = -1;
          // only match artiles with not empty contents
          if (data_content !== '') {
            keywords.forEach(function (keyword, i) {
              index_title = data_title.indexOf(keyword);
              index_content = data_content.indexOf(keyword);

              if (index_title < 0 && index_content < 0) {
                isMatch = false;
              } else {
                if (index_content < 0) {
                  index_content = 0;
                }
                if (i == 0) {
                  first_occur = index_content;
                }
                // content_index.push({index_content:index_content, keyword_len:keyword_len});
              }
            });
          } else {
            isMatch = false;
          }
          // 0x05. show search results
          if (isMatch) {
            str += "<li><a href='" + data_url + "' class='search-result-title posttitle' target='_blank'>" + orig_data_title + "</a>";
            var content = orig_data_content;
            if (first_occur >= 0) {
              // cut out 100 characters
              var start = first_occur - 20;
              var end = first_occur + 80;

              if (start < 0) {
                start = 0;
              }

              if (start == 0) {
                end = 100;
              }

              if (end > content.length) {
                end = content.length;
              }

              var match_content = content.substr(start, end);

              // highlight all keywords
              keywords.forEach(function (keyword) {
                var regS = new RegExp(keyword, "gi");
                match_content = match_content.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
              });

              str += "<p class=\"search-result\">" + match_content + "...</p>";
            }
            str += "</li>";
          }
        });
        str += "</ul>";
        if (str.indexOf('<li>') === -1) {
          $resultContent.innerHTML = BTN + "<ul>" + SEARCH_EMPTY + "</ul>";
          return;
        }
        $resultContent.innerHTML = BTN + str;
      });
    }
  });
  $(document).on('click', '#local-search-close', function() {
    $('#local-search-input').val('');
    $('#local-search-result').html(SEARCH_START);
  });
};

var getSearchFile = function(){
    var path = "/search.xml";
    searchFunc(path, 'local-search-input', 'local-search-result');
};

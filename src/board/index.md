---
title: The board
permalink: /board/
redirect-from: /alumni-board/
---

<p class="uk-text-lead">
  The board is composed of 10 members and 3 advisors. The board acts as a bridge between the university, alumni and our community to facilitate networking and influence in the decision making process at Jacobs.
</p>


<div class="uk-grid uk-grid-small uk-child-width-1-1@s uk-child-width-1-3@m " uk-grid>
  {% for member in site.data.board %}
    {% include_relative member.html member=member %}
  {% endfor %}
</div>

## Associate Advisors to the Board

<!-- TODO: Check if these are still advisors -->
<div class="uk-grid uk-grid-small uk-child-width-1-1@s uk-child-width-1-3@m " uk-grid>
  {% for advisor in site.data.advisors %}
    {% include_relative member.html member=advisor %}
  {% endfor %}
</div>
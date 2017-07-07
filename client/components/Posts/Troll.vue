<template>
  <div class="troll">
    <img src="/icons/trollface.png"/> 0
  </div>
</template>

<style>
  .troll {
    cursor: pointer;
    color: #2a5885;
    white-space: nowrap;
    overflow: hidden;
    margin-right: 8px;
    padding: 5px 6px 6px;
    border-radius: 3px;
    float: left;
  }
  .troll:hover {
    background-color: #f5f7fa;
  }
  .troll img {
    height: 20px;
    vertical-align: bottom;
    opacity: .5;
  }
  .troll:hover img {
    opacity: 1;
  }
</style>

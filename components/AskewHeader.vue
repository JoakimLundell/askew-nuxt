<template>
  <header>
    <div>chatt</div>
    <div>logo</div>
    <AuthIcons />
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  inset-inline: 0;
  background-color: black;
  height: var(--header);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--padding);
}

header > *:first-child,
header > *:last-child {
  flex: 1;
}
header > *:last-child {
  justify-content: end;
}
</style>

<template>
  <input type="checkbox" id="burger-wrapper" class="burger-wrapper" />
  <label for="burger-wrapper" class="burger">
    <div class="bars">
      <span class="bar bar-1"></span>
      <span class="bar bar-2"></span>
      <span class="bar bar-3"></span>
    </div>
  </label>

</template>

<style scoped lang="scss">
  .bar {
    transition: all 70ms linear;
  }

  .burger-wrapper{
    display: none;
    &:checked + .burger {
      & .bar-1 {
        transform: rotate(45deg) translate(7px, 6px);
      }

      & .bar-2 {
        opacity: 0;
      }

      & .bar-3 {
        transform: rotate(-45deg) translate(8px, -6px);
      }
    }
  }

  .burger{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid rgba(255, 0, 0, 0.493);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 10px;
    &>.bars {
      height: 50%;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      &>span{
        display: block;
        height: 5px;
        width: 100%;
        background: red;
      }
      }
  }
</style>

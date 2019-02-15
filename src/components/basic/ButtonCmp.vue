<template>
  <component :is="type" :href="href" :type="submit" :class="['button', variation]">
    <slot />
  </component>
</template>

<script>
/**
 * Buttons are generally used for interface actions. Suitable for all-purpose use.
 * Defaults to appearance that has white background with grey border.
 * Primary style should be used only once per view for main call-to-action.
 */
export default {
  name: "ButtonCmp",
  props: {
    /**
     * The html element used for the button.
     * `button, a`
     */
    type: {
      type: String,
      default: "button",
      validator: value => {
        return value.match(/(button|a)/)
      },
    },
    /**
     * When setting the button’s type to a link, use this option to give a href.
     */
    href: {
      type: String,
      default: null,
    },
    /**
     * Set the button’s type to “submit”.
     */
    submit: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(null|submit)/)
      },
    },
    /**
     * Style variation to give additional meaning.
     * `primary, secondary`
     */
    variation: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(primary|secondary)/)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  transition: all 0.2s ease;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //font-family: 'Poppins, sans-serif';
  font-size: 10px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  background: transparent;
  color: #000;
  letter-spacing: 2px;
  padding: 12px 30px 10px;
  text-decoration: none;
  cursor: pointer;
  text-shadow: 0 1px 10px #a2a2ab;

  &.primary {
    background: red;
    color: white;
    text-transform: uppercase;
  }

  &:hover,
  &.hover {
    color: white;
    background: red;
  }
  &:active,
  &.active {
    background: darken(red, 15%);
    color: white;
  }

  &:focus,
  &.focus {
    background: darken(red, 10%);
    color: white;
    outline: 0;
  }
}
</style>

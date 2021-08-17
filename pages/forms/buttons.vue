<template>
  <section class="grid grid-cols-1 gap-10">
    <div>
      <button class="btn btn-primary">Submit</button>

      <button class="btn btn-primary gap-2">
        <i class="fas fa-upload"></i>
        <span>Upload</span>
      </button>

      <button class="btn btn-primary">
        <i class="fas fa-upload"></i>
      </button>

      <button class="btn btn-primary gap-2">
        <i class="fas fa-spinner fa-spin"></i>
        <span>loading</span>
      </button>

      <button class="btn btn-primary" disabled="">
        Disabled
      </button>
    </div>

    <div>
      <button class="btn btn-primary rounded">
        Rounded
      </button>

      <button class="btn btn-primary rounded gap-2">
        <i class="fas fa-upload"></i>
        Rounded
      </button>
    </div>

    <div>
      <button class="btn btn-primary square">
        Rounded
      </button>

      <button class="btn btn-primary square gap-2">
        <i class="fas fa-upload"></i>
        Rounded
      </button>
    </div>

    <div>
      <button class="btn btn-primary rounded outlined">
        Outlined
      </button>

      <button class="btn btn-primary rounded outlined gap-2">
        <i class="fas fa-upload"></i>
        Outlined
      </button>
    </div>

    <div>
      <button class="btn btn-primary rounded flat">
        Flat button
      </button>

      <button class="btn btn-primary rounded flat gap-2">
        <i class="fas fa-upload"></i>
        Flat button
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component
export default class PageFormsButtons extends Vue {

}
</script>

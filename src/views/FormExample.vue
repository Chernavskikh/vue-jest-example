<template>
  <div class="about">
    <h1 class="text-center">Form Example</h1>
    <b-container class="bv-example-row">
      <b-row align-h="center">
        <b-col cols="6">
          <validation-observer ref="observer">
            <b-form @submit="onSubmit">
              <input-validated
                rules="required|email"
                type="email"
                label="Email address:"
                name="Email"
                v-model="form.email"
                placeholder="Enter email"
              />

              <input-validated
                rules="required"
                name="Password"
                vid="password"
                type="password"
                label="Password"
                v-model="form.password"
                placeholder="Enter password"
              />

              <input-validated
                rules="required|confirmed:password"
                name="Password confirmation"
                type="password"
                label="Password confirmation"
                v-model="form.confirmation"
                placeholder="Confirm password"
              />

              <b-button type="submit" variant="primary" class="mx-1">Submit</b-button>
              <b-button type="reset" variant="danger" class="mx-1">Reset</b-button>
            </b-form>
          </validation-observer>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        confirmation: ''
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.observer.validate();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>

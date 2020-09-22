import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import FormExample from '@/views/FormExample'
import BootstrapVue from 'bootstrap-vue'
import InputValidated from '@/components/InputValidated'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, confirmed } from 'vee-validate/dist/rules.js'

const localVue = createLocalVue()
localVue.use(BootstrapVue) // add bootstrap components to the local vue
localVue.component('ValidationObserver', ValidationObserver)
localVue.component('ValidationProvider', ValidationProvider)
localVue.component('input-validated', InputValidated)
extend('required', required)
extend('email', email)
extend('confirmed', confirmed)

let wrapper;

beforeEach(() => {
  wrapper = mount(FormExample, {
    localVue,
    sync: false,
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('FormExample', () => {
  it('Component mounting and rendering', async () => {
    expect(wrapper.findComponent({ ref: 'observer' }).exists()).toBe(true)
    expect(wrapper.find('[name="Email"]').exists()).toBe(true)
    expect(wrapper.find('[name="Password"]').exists()).toBe(true)
    expect(wrapper.find('[name="Password confirmation"]').exists()).toBe(true)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
  });
});

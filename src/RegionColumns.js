import { ref, h, mergeProps, defineComponent } from 'vue'
import RegionColumnsCore from './components/Columns'

import { CN } from './language'
import { useDropdown } from './utils/selector'

export default defineComponent({
  name: 'RegionColumns',
  inheritAttrs: false,
  props: {
    language: { type: String, default: CN },
    disabled: { type: Boolean, default: false }
  },
  emits: ['complete', 'visible-change'],
  setup (props, { emit, slots, expose, attrs }) {
    const {
      generateDropdown,
      generateDropdownTriggerButton,
      closeDropdown,
      adjustDropdown
    } = useDropdown(props)
    const columns = ref(null)

    function clear () {
      columns.value && columns.value.reset()
      closeDropdown()
    }

    expose({ reset: clear })

    return () => {
      const trigger = generateDropdownTriggerButton(
        slots, () => columns, clear
      )

      const columnsOption = {
        ref: columns,
        onComplete: () => {
          closeDropdown()
          emit('complete')
        },
        onAdjust: adjustDropdown
      }
      const contents = h(RegionColumnsCore, mergeProps(columnsOption, attrs))

      const dropdownOption = {
        onVisibleChange (val) {
          emit('visible-change', val)
        }
      }
      return generateDropdown(dropdownOption, trigger, contents)
    }
  }
})

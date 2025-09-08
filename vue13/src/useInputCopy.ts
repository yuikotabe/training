import { ref } from 'vue'

export function useInputCopy() {
  const inputValue = ref<string>('')   // 入力値
  const copyData = ref<string>('')     // コピーされた値

  function changeInputValue(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      inputValue.value = event.target.value
    }
  }

  async function inputValueCopy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(inputValue.value)
      copyData.value = inputValue.value
      alert('コピーしました。')
    } catch {
      alert('コピーできませんでした。')
    }
  }

  return {
    inputValue,
    copyData,
    changeInputValue,
    inputValueCopy,
  }
}

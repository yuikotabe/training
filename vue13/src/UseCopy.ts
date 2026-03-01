// useCopy.ts
import { ref } from 'vue'

export function useCopy() {
  const copyData = ref<string>('')

 function urlCopy(text: string): void {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      copyData.value = text
      alert('コピーしました。')
    })
    .catch(() => {
      alert('コピーできませんでした。')
    })
}

  return {
    copyData,
    urlCopy,
  }
}

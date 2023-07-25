import { defineStore } from 'pinia'
// 定義一個叫做settings的store
export const useSettingsStore = defineStore('settings', {
  // 這個store的資料，必須要寫成function return
  state: () => ({
    alarms: [
      { id: 1, name: 'Alarm', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
      { id: 2, name: 'yay', file: new URL('@/assets/yay.mp3', import.meta.url).href }
    ],
    selectedAlarm: 1,
    notify: false
  }),
  getters: {
    selectedAlarmFile() {
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarm)
      return this.alarms[i].file
    }
  },
  persist: {
    key: 'pomodoro-settings',
    paths: ['selectedAlarm', 'notify']
  }
})

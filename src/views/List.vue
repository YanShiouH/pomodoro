<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>事項</h1>
      </v-col>
      <v-col cols="12">
        <v-text-field v-model="newItem" label="Add Task" append-icon="mdi-plus" @click:append="onInputSubmit"
          @keydown.enter="onInputSubmit" :rules="[rules.required, rules.length]" ref="newItemInput"></v-text-field>
        <v-table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in items" :key="item.id">
              <td>
                <v-text-field v-model="item.model" :rules="[rules.required, rules.length]" v-show="item.edit" autofocus
                  ref="editItemInput" @keydown.enter="onEditInputSubmit(item.id, i)"></v-text-field>
                <span v-show="!item.edit">{{ item.name }}</span>
              </td>
              <td>
                <template v-if="item.edit">
                  <v-btn variant="text" icon="mdi-check" color="green" @click="onEditInputSubmit(item.id, i)"></v-btn>
                  <v-btn variant="text" icon="mdi-undo" color="red" @click="cancelEditItem(item.id)"></v-btn>
                </template>
                <template v-else>
                  <v-btn icon="mdi-pencil" color="green" variant="text" @click="editItem(item.id)"></v-btn>
                  <v-btn icon="mdi-delete" color="red" variant="text" @click="delItem(item.id)"></v-btn>
                </template>
              </td>
            </tr>
            <tr v-if="items.length === 0">
              <td colspan="2" class="text-center">No Tasks</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col cols="12">
        <h1>Completed Tasks</h1>
      </v-col>
      <v-col cols="12"><v-table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in finishedItems" :key="item.id">
              <td>{{ item.name }}</td>
              <td><v-btn icon="mdi-delete" color="red" variant="text" @click="delFinishedItem(item.id)"></v-btn></td>
            </tr>
            <tr v-if="finishedItems.length === 0">
              <td colspan="2" class="text-center">No Tasks</td>
            </tr>
          </tbody>
        </v-table></v-col>

    </v-row>
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
import { useListStore } from '@/store/list'
import { storeToRefs } from 'pinia'

const list = useListStore()
const { addItem, editItem, cancelEditItem, delItem, confirmEditItem, delFinishedItem } = list
const { items, finishedItems } = storeToRefs(list)
const newItem = ref('')
const newItemInput = ref(null)
const editItemInput = ref([])
const onInputSubmit = async () => {
  const validate = await newItemInput.value.validate()
  console.log(validate)
  if (validate.length > 0) return
  addItem(newItem.value)
  newItemInput.value.blur()
  newItemInput.value.reset()
}
const onEditInputSubmit = async (id, i) => {
  const validate = await editItemInput.value[i].validate()
  console.log(validate)
  if (validate.length > 0) return
  confirmEditItem(id)
}
const rules = {
  required: (value) => Boolean(value) || 'Field is required',
  length: (value) => value.length >= 3 || 'Must be at least three characters'
}
</script>

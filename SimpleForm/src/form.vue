<template>
  <div class="container">
    <div class="card form-card">
      <h1>Table and Form Interaction</h1>

      <form class="form-group">
        <div class="input-group" v-for="(field, index) in header" :key="index">
          <label :for="field.label.toLowerCase()">{{ field.label }}:</label>

          <!-- Dynamic input types -->
          <input v-if="field.type === 'text' || field.type === 'number'" :type="field.type"
            :id="field.label.toLowerCase()" v-model="newEntry[field.label.toLowerCase()]"
            :readonly="field.readonly || isFormUpdate" required />
          <textarea v-else-if="field.type === 'textarea'" :id="field.label.toLowerCase()"
            v-model="newEntry[field.label.toLowerCase()]" :readonly="field.readonly ^ isFormUpdate"
            required></textarea>
          <div v-else-if="field.type === 'checkbox'" class="checkbox-group">
            <label class="radio-inline">
              <input type="radio" :value="'Online'" v-model="newEntry[field.label.toLowerCase()]" required />
              Online
            </label>
            <label class="radio-inline">
              <input type="radio" :value="'Offline'" v-model="newEntry[field.label.toLowerCase()]" />
              Offline
            </label>
          </div>
        </div>

        <button type="button" v-if="!isFormUpdate" class="btn btn-primary" @click="addRow">
          Add
        </button>
        <button type="button" v-if="isFormUpdate" class="btn btn-primary" @click="updateRow">
          Update
        </button>
      </form>
    </div>

    <!-- Table -->
    <div class="card table-card">
      <table class="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in entries" :key="entry.id" @click="editRow(index)">
            <td>{{ entry.name }}</td>
            <td>{{ entry.number }}</td>
            <td>{{ entry.description }}</td>
            <td class="status-cell" :class="{ online: entry.status === 'Online', offline: entry.status === 'Offline' }">
              {{ entry.status }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";

var header = [];
const entries = ref([]);
const newEntry = reactive({
  id: null,
  name: "",
  number: "",
  description: "",
  status: "Offline",
});
const editIndex = ref(null);
const isFormUpdate = ref(false); // Tracks whether we're updating an existing entry

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/data");
    entries.value = response.data.data;

  } catch (error) {
    alert("Failed to fetch data. Please try again.");
  }
};

const getHeader = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/headers");
    header = response.data.headers;
    console.log(response.data.headers);
  } catch (error) {
    alert("Failed to fetch headers. Please try again."+error);
  }
};

const resetForm = () => {
  Object.assign(newEntry, { id: null, name: "", number: "", description: "", status: "Offline" });
  editIndex.value = null;
  isFormUpdate.value = false;
};

const addRow = async () => {
  if (newEntry.name && newEntry.number && newEntry.description) {
    try {
      const response = await axios.post("http://localhost:3000/api/submit", newEntry);
      entries.value.push(response.data.data);
      resetForm();
    } catch (error) {
      alert("Failed to add entry. Please try again.");
    }
  } else {
    alert("Please fill out all fields.");
  }
};

const editRow = (index) => {
  editIndex.value = index;
  Object.assign(newEntry, entries.value[index]);
  isFormUpdate.value = true;
};

const updateRow = async () => {
  if (editIndex.value !== null) {
    try {
      await axios.put(`http://localhost:3000/api/updateStatus/${newEntry.id}`, newEntry);
      entries.value[editIndex.value] = { ...newEntry };
      resetForm();
    } catch (error) {
      alert("Failed to update entry. Please try again.");
    }
  }
};

// Ensure both `fetchData` and `getHeader` run on mounted
onMounted(() => {
  fetchData();
  getHeader();
});
</script>

import { configureStore, createSlice } from '@reduxjs/toolkit'; 
// Importerar nödvändiga funktioner från Redux Toolkit för att skapa slice och konfigurera en store

// Skapar en slice för att hantera tema
const themeSlice = createSlice({
  name: 'theme', // Namn på slicen
  initialState: { theme: 'light' }, // Sätter initialt tillstånd för temat
  reducers: {
    toggleTheme: (state) => {
      // Reducer som växlar mellan 'light' och 'dark' tema
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

// Exporterar action-creators som skapades av Redux Toolkit
export const { toggleTheme } = themeSlice.actions; 

// Konfigurerar och skapar en Redux store
const store = configureStore({
  reducer: {
    theme: themeSlice.reducer, // Lägger till tema-reducer i store
  },
});

export default store; 
// Exporterar store för att användas i hela applikationen

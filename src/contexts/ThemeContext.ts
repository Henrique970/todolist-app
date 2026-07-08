import { createContext } from "react";

// Tipando o nome do tema, mostrando ao TP que o tema só tem duas opções.
// Quando queremos usar unionType, é recomendado usar o type ao invés do interface.
export type ThemeName = "dark" | "light";

interface ThemeContextType {
    theme: ThemeName;
    toggleTheme: () => void;
}

// Criando o contexto do tema.
export const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => {}
});
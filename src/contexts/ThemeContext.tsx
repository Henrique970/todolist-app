import { createContext, useState } from "react";

// Tipando o nome do tema, mostrando ao TP que o tema só tem duas opções.
// Quando queremos usar unionType, é recomendado usar o type ao invés do interface.
type ThemeName = "dark" | "light";

interface ThemeContextType {
    theme: ThemeName;
    toggleTheme: () => void;
}

// Criando o contexto do tema.
export const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => {}
});

// Aqui estamos tipando para o TypeScript entender que o children é React.ReactNode. Ou seja, qualquer elemento React que possa ser renderizado dentro do provedor.
interface ThemeProviderProps {
    children: React.ReactNode;
}


// Criando o provedor do tema.
// O children é uma propriedade do React que representa os elementos filhos que serão renderizados dentro do provedor.
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    
    const [theme, setTheme] = useState<ThemeName>("dark");

    const toggleTheme = () => {
        // Se o tema for dark, muda para light e vice-versa.
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }
    
    return (
        // O value é como se fosse uma mochila que carrega ops valores que queremos compartilhar com os filhos.
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
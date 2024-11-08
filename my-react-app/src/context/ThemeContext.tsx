import { createContext, useState } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};
const ThemeContext = createContext<ThemeContextType | null>(null);
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeProvider };

// const useTheme = () => {
//     const context = React.useContext(ThemeContext);
//     if (context === null) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//     }
//     return context;
//    };

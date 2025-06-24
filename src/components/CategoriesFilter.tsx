import { useEffect, useState } from "react";
import { categories } from "../lib/subaMethods";
import { ICategory } from "../types/Index";
import { useTranslation } from "react-i18next";

const CategoriesFilter = ({ onChange }: { onChange: (id: string) => void }) => {
    const [cats, setCats] = useState<ICategory[]>([]);
    const [selected, setSelected] = useState("");
    const { t, i18n } = useTranslation();
          const isAr= i18n.language === "ar";  
    useEffect(() => {
        const fetchCategories = async () => {
            const data = await categories();
            setCats(data);
        };

        fetchCategories();
    }, []);

    const handleClick = (id: string) => {
        setSelected(id);
        onChange(id);
    };

    return (
        <div className="mb-6 flex flex-wrap gap-2">
            <button
                onClick={() => handleClick("")}
                className={`px-2 lg:px-4 py-2 rounded-full text-sm lg:text-lg font-medium transition-colors ${selected === ""
                    ? "bg-main-color text-white"
                    : "bg-transparent border border-white text-white hover:bg-main-color hover:border-main-color hover:text-white"
                    }`}
            >
                {t("allCategories")}
            </button>

            {cats.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => handleClick(String(cat.id))}
                    className={`px-2 lg:px-4 py-2 rounded-full text-sm lg:text-lg font-medium transition-colors ${selected == String(cat.id)
                        ? "bg-main-color text-white"
                        : "bg-transparent border border-white text-white hover:bg-main-color hover:border-main-color hover:text-white"
                        }`}
                >
                    {isAr ? cat.categoryAr : cat.category }
                </button>
            ))}
        </div>
    );
};

export default CategoriesFilter;

import Image from 'next/image';

export default function Tools() {
    const tools = [
        { icon: "/icons/icon_html.svg", name: "HTML" },
        { icon: "/icons/icon_javascript.svg", name: "JAVASCRIPT" },
        { icon: "/icons/icon_next.svg", name: "NEXT JS" },
        { icon: "/icons/icon_webpack.svg", name: "WEBPACK" },
        { icon: "/icons/icon_github.svg", name: "GITHUB" },
        { icon: "/icons/canva.svg", name: "CANVA" },
        { icon: "/icons/yarn.svg", name: "YARN" },
        { icon: "/icons/bootstrap_logo.svg", name: "BOOTSTRAP" },
        { icon: "/icons/icon_css.svg", name: "CSS" },
        { icon: "/icons/icon_react.svg", name: "REACT JS" },
        { icon: "/icons/icon_typescript.svg", name: "TYPESCRIPT" },
        { icon: "/icons/icon_git.svg", name: "GIT" },
        { icon: "/icons/icon_figma.svg", name: "FIGMA" },
        { icon: "/icons/npm.svg", name: "NPM" },
        { icon: "/icons/icon_framer.svg", name: "FRAMER" },
        { icon: "/icons/tailwind_logo.svg", name: "TAILWIND CSS" },
    ];

    // Create a 16x2 grid with alternating pattern
    const gridItems = [];
    let toolIndex = 0;
    
    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 16; col++) {
            // First row: tools on even columns (0, 2, 4...)
            // Second row: tools on odd columns (1, 3, 5...)
            const shouldShowTool = (row === 0 && col % 2 === 0) || (row === 1 && col % 2 === 1);
            
            gridItems.push({
                row,
                col,
                tool: shouldShowTool ? tools[toolIndex++] : null
            });
        }
    }

    return (
        <div className="tools-grid">
            {gridItems.map((item, index) => (
                <div 
                    key={index} 
                    className="tools-grid-item"
                    style={{
                        gridColumn: item.col + 1,
                        gridRow: item.row + 1
                    }}
                >
                    {item.tool && (
                        <>
                            <div className="tool-icon-container">
                                <Image 
                                    src={item.tool.icon} 
                                    alt={item.tool.name}
                                    width={40}
                                    height={40}
                                    className="tool-icon"
                                />
                            </div>
                            <p className="tool-name">{item.tool.name}</p>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}
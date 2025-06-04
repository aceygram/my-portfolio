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

    // Create checkerboard pattern for desktop
    const gridItems = [];
    let toolIndex = 0;
    
    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 16; col++) {
            const shouldShowTool = (row === 0 && col % 2 === 0) || (row === 1 && col % 2 === 1);
            gridItems.push({
                row,
                col,
                tool: shouldShowTool ? tools[toolIndex++] : null
            });
        }
    }

    return (
        <div className="tools-container">
            {/* Desktop: Checkerboard pattern */}
            <div className="tools-grid">
                {gridItems.map((item, index) => (
                    <div 
                        key={`desktop-${index}`} 
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
                                        width={30}
                                        height={30}
                                        className="tool-icon"
                                    />
                                </div>
                                <p className="tool-name">{item.tool.name}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile: Simple grid (hidden by default) */}
            <div className="tools-grid-mobile">
                {tools.map((tool, index) => (
                    <div key={`mobile-${index}`} className="tools-grid-item">
                        <div className="tool-icon-container">
                            <Image 
                                src={tool.icon} 
                                alt={tool.name}
                                width={30}
                                height={30}
                                className="tool-icon"
                            />
                        </div>
                        <p className="tool-name">{tool.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
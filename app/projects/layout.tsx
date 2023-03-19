
export const metadata = {
    title: 'Portfolio Board | Gregory Freitas',
    description: 'Board of projects to showcase the work of Gregory Freitas',
}

export default function ProjectBoardLayout({
    children,
}: {
    children: React.ReactNode,
    }) {
    return (
        <section>
            {children}
        </section>
    )
}
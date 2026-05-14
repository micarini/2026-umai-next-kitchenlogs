const RecipeTags = ({ tags }) => {
    return (
        <>
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 bg-[#93a74d] text-white rounded-full text-sm font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </>
    )
}

export default RecipeTags;
    
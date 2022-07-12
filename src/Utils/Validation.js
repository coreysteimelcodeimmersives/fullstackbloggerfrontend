const validateBlog = (blog) => {
  if (blog.title && blog.author && blog.category && blog.text) {
    return { isValid: true };
  }
  const missingTitle = blog.title ? (
    ""
  ) : (
    <div>
      <br /> - Title
    </div>
  );
  const missingAuthor = blog.author ? (
    ""
  ) : (
    <div>
      <br /> - Author
    </div>
  );
  const missingCategory = blog.category ? (
    ""
  ) : (
    <div>
      <br /> - Category
    </div>
  );
  const missingText = blog.text ? (
    ""
  ) : (
    <div>
      <br /> - Text
    </div>
  );
  const newMissingMessage = (
    <div>
      To submit a blog please include:
      {missingTitle}
      {missingAuthor}
      {missingCategory}
      {missingText}
    </div>
  );
  return { isValid: false, mssg: newMissingMessage };
};

export default validateBlog;

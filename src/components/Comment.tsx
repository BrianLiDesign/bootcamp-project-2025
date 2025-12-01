import { IComment } from "@/database/blogSchema";

type CommentProps = {
  comment: IComment;
};

/**
 * Formats a date into a readable format
 * Example: "November 29, 2025 at 4:30 PM"
 */
function parseCommentTime(time: Date): string {
  const date = new Date(time);

  if (isNaN(date.getTime())) {
    return "";
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
}

function Comment({ comment }: CommentProps) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        padding: "12px",
        borderRadius: "8px",
        backgroundColor: "#fafafa",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
          alignItems: "center",
        }}
      >
        <h4 style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>
          {comment.name}
        </h4>
        <span style={{ color: "#999", fontSize: "12px" }}>
          {parseCommentTime(comment.createdAt)}
        </span>
      </div>
      <p style={{ margin: 0, whiteSpace: "pre-wrap", lineHeight: 1.5 }}>
        {comment.message}
      </p>
    </div>
  );
}

export default Comment;

// List of emoji Unicode values
const emojis = [
  "\\u{1F600}", // 😀
  "\\u{1F60D}", // 😍
  "\\u{1F914}", // 🤔
  "\\u{1F622}", // 😢
  "\\u{1F621}", // 😡
  "\\u{1F389}", // 🎉
  "\\u{2764}", // ❤️
  "\\u{1F525}", // 🔥
  "\\u{1F44D}", // 👍
  "\\u{1F44E}", // 👎
  "\\u{1F602}", //😂
  "\\u{1F603}", //😄
  "\\u{1F604}", //😅
  "\\u{1F605}", //😆
  "\\u{1F606}", //😉
  "\\u{1F609}", //😉
  "\\u{1F60A}", //😊
];

// Convert Unicode escape sequences to actual emojis
const parseUnicodeEmoji = (unicode: string) => {
  return unicode.replace(/\\u\{([0-9A-Fa-f]+)\}/g, (_, code) =>
    String.fromCodePoint(parseInt(code, 16))
  );
};

const EmojiSelector = ({ onSelect }: { onSelect: (emoji: string) => void }) => {
  const handleEmojiClick = (emoji: string) => {
    onSelect(emoji); // Pass the selected emoji to the parent component
  };

  return (
    <div className=" bg-white p-2 rounded w-52 shadow-[0px_4px_9px_1px_rgba(0,_0,_0,_0.3)]  max-h-[300px]">
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {emojis.map((emoji, index) => {
          const parsedEmoji = parseUnicodeEmoji(emoji);
          return (
            <span
              key={index}
              onClick={() => handleEmojiClick(parsedEmoji)}
              style={{
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              {parsedEmoji}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default EmojiSelector;

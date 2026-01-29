import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEcoChat, Message } from "@/hooks/useEcoChat";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

interface EcoChatWidgetProps {
  topic?: "air-quality" | "energy-water" | "waste";
  inline?: boolean;
  placeholder?: string;
}

const ChatMessage = ({ message }: { message: Message }) => {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex gap-3", isUser ? "flex-row-reverse" : "flex-row")}>
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
          isUser ? "bg-primary text-primary-foreground" : "bg-leaf/20 text-leaf"
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 text-sm",
          isUser
            ? "bg-primary text-primary-foreground rounded-tr-md"
            : "bg-muted rounded-tl-md"
        )}
      >
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

const EcoChatWidget = ({
  topic,
  inline = false,
  placeholder = "Ask EcoBuddy about sustainability...",
}: EcoChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(inline);
  const [input, setInput] = useState("");
  const { messages, isLoading, error, sendMessage, clearMessages } = useEcoChat({ topic });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input.trim());
    setInput("");
  };

  const suggestedQuestions = topic
    ? {
        "air-quality": [
          "What is AQI and how is it measured?",
          "How can I improve indoor air quality?",
          "What are the health effects of PM2.5?",
        ],
        "energy-water": [
          "How can I reduce my electricity bill?",
          "What are easy water-saving tips?",
          "Should I switch to LED bulbs?",
        ],
        waste: [
          "How do I sort wet and dry waste?",
          "What items can be recycled?",
          "How do I start composting at home?",
        ],
      }[topic]
    : [
        "How can I reduce my carbon footprint?",
        "What's the best way to recycle?",
        "Tips for saving energy at home",
      ];

  if (!inline && !isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-elevated z-50 bg-leaf hover:bg-leaf/90"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  const chatContent = (
    <>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-leaf/10 to-primary/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-leaf/20 flex items-center justify-center">
            <Bot className="h-5 w-5 text-leaf" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">EcoBuddy</h3>
            <p className="text-xs text-muted-foreground">Your sustainability assistant</p>
          </div>
        </div>
        {!inline && (
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-leaf/10 flex items-center justify-center">
              <Bot className="h-8 w-8 text-leaf" />
            </div>
            <h4 className="font-medium mb-2">Hi, I'm EcoBuddy! 🌱</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Ask me anything about air quality, energy conservation, or waste management.
            </p>
            <div className="space-y-2">
              {suggestedQuestions.map((q, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="sm"
                  className="w-full text-left justify-start text-xs h-auto py-2 px-3"
                  onClick={() => {
                    setInput(q);
                    inputRef.current?.focus();
                  }}
                >
                  {q}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((msg, i) => <ChatMessage key={i} message={msg} />)
        )}
        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-leaf/20 flex items-center justify-center">
              <Loader2 className="h-4 w-4 text-leaf animate-spin" />
            </div>
            <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        {error && (
          <div className="bg-destructive/10 text-destructive text-sm rounded-lg p-3 text-center">
            {error}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t bg-background">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={!input.trim() || isLoading} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        {messages.length > 0 && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="w-full mt-2 text-xs text-muted-foreground"
            onClick={clearMessages}
          >
            Clear conversation
          </Button>
        )}
      </form>
    </>
  );

  if (inline) {
    return (
      <div className="bg-card border rounded-2xl shadow-card flex flex-col h-[500px]">
        {chatContent}
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-6rem)] bg-card border rounded-2xl shadow-elevated z-50 flex flex-col">
      {chatContent}
    </div>
  );
};

export default EcoChatWidget;

import logo from "@/assets/tarento.svg";




type HeaderProps = {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setShowQR: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({
  isEditing,
  setIsEditing,
  setShowQR,
}: HeaderProps) {
  return (
    <header className="fixed top-0 z-50 flex h-[72px] w-full items-center justify-between border-b bg-white px-8 shadow-sm">

        <div className="flex items-center gap-4">

  <img
    src={logo}
    
    className="h-12 w-auto"
  />

  <div>

   

    <h1 className="text-xs text-gray-500">
      Employee Digital Profile
    </h1>

  </div>

</div>

      <div className="flex gap-4">

        <button
          onClick={() => setShowQR(true)}
          className="rounded-lg bg-[var(--primary)] px-4 py-2 text-white"
        >
          Generate QR
        </button>

        {!isEditing ? (
          <button
          onClick={() => setIsEditing(true)}
            className="rounded-lg border px-4 py-2"
          >
            Edit Profile
          </button>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(false)}
              className="rounded-lg border px-4 py-2"
            >
              Cancel
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="rounded-lg bg-[var(--primary)] px-4 py-2 text-white"
            >
              Confirm Changes
            </button>
          </>
        )}

      </div>
    </header>
  );
}

export default Header;
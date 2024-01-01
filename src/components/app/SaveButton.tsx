type SaveButtonProps = {
  title: string;
  isPending: boolean;
};

const SaveButton = ({ isPending = false, title = "Save" }: SaveButtonProps) => {
  return (
    <button type="submit" className="btn btn-primary" disabled={isPending}>
      {isPending ? <span className="loading loading-spinner"></span> : title}
    </button>
  );
};

export default SaveButton;

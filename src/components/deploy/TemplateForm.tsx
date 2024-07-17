interface TemplateOptionProps {
  handleDeploy: React.FormEventHandler<HTMLFormElement>
}

export default function TemplateForm({
  handleDeploy,
}: TemplateOptionProps) {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleDeploy}
    >
      <div className="flex flex-col gap-2 py-4">
        <div>
          <label htmlFor="template0">
            <input type="radio" name="template" id="template0" value={0} defaultChecked />
            템플릿 0
          </label>
        </div>
        <div>
          <label htmlFor="template1">
            <input type="radio" name="template" id="template1" value={1} />
            템플릿 1
          </label>
        </div>
        <div>
          <label htmlFor="template2">
            <input type="radio" name="template" id="template2" value={2} />
            템플릿 2
          </label>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="rounded-md bg-zinc-700 px-6 py-2 text-white"
          type="submit"
        >
          배포
        </button>
      </div>
    </form>
  );
}

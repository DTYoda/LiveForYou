import Form from "next/form";

export default function SettingsForm() {
    return (
        <div className="h-full w-full flex flex-col gap-8 rounded-2xl items-center rounded-xl border border-black shadow-lg border-solid p-3 m-5 bg-green-500/25">

            <Form>
                <h2 className="text-xl">Settings</h2>
                <div className="w-full text-left">
                    {/* <label class="m-4">Email: <input type="email" class="w-full"></input></label><br></br> */}
                    <label >Username: <input type="text"></input></label><br></br>

                    <label className='align-top'>Information on the home page: <select className="cursor-pointer w-full rounded border-black rounded" multiple defaultValue={["water", "steps"]}>
                        <option value="water" defaultValue={"water"}>Cups of Water</option>
                        <option value="steps" defaultValue={"steps"}>Steps</option>
                    </select></label>

                </div>
            </Form>
        </div>
    );
}

import Form from 'next/form'

export default function SettingsForm() {
    return (
        <div className="h-full w-full flex flex-col gap-8 rounded-2xl items-center rounded-xl border border-black shadow-lg border-solid p-3 m-5 bg-green-500/25">

            <Form>
                <h2 class="text-xl">Settings</h2>
                <div class="w-full">
                    {/* <label class="m-4">Email: <input type="email" class="w-full"></input></label><br></br> */}
                    <label class="m-4">Username: <input type="text"></input></label>

                    <label>Information on the home page:<select>
                        <option value="water" defaultValue={"water"}>Cups of Water</option>

                    </select></label>

                </div>
            </Form>
        </div>
    );
}

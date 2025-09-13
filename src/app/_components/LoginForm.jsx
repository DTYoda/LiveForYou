import Form from 'next/form'

export default function LogInForm() {
    return (
        <div className="h-full w-full flex flex-col gap-8 rounded-2xl items-center rounded-xl border border-black shadow-lg border-solid p-3 m-5 bg-green-500/25">

            <Form>
                <h2 className="text-xl">Settings</h2>
                <div className="w-full">
                    {/* <label className="m-4">Email: <input type="email" className="w-full"></input></label><br></br> */}
                    <label className="m-4">Username: <input type="text"></input></label><br></br>

                    <label>Information on the home page:<select>
                        <option value="water" defaultValue={"water"}>Cups of Water</option>

                    </select></label>

                </div>
            </Form>
        </div>
    );
}

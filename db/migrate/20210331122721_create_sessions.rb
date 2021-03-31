class CreateSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :sessions do |t|
      t.string :session_id
      t.boolean :expired

      t.timestamps
    end
  end
end
